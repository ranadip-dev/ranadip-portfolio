import { useEffect, useRef } from "react"

function LatticeBackground() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current

    if (!container || !canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId
    let resizeObserver

    let width = 0
    let height = 0
    let points = []

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    }

    const maxDistance = 150
    const maxDistanceSquared = maxDistance * maxDistance

    const initPoints = () => {
      points = []

      const density = Math.floor((width * height) / 12000)

      const count = Math.min(
        Math.max(density, 45),
        90
      )

      for (let i = 0; i < count; i += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,

          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,

          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.8 + Math.random() * 1.2,
        })
      }
    }

    const handleResize = () => {
      const rect = container.getBoundingClientRect()

      width = rect.width
      height = rect.height

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      )

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      )

      initPoints()
    }

    /*
     * Listen on WINDOW instead of the canvas/container.
     *
     * The canvas sits behind your portfolio content,
     * so window-level tracking lets the lattice react
     * while buttons and links remain fully clickable.
     */
    const handleMouseMove = (event) => {
      mouse.targetX = event.clientX
      mouse.targetY = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.targetX = -1000
      mouse.targetY = -1000
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    )

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    )

    resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    handleResize()

    let lastTime = performance.now()

    const render = (now) => {
      const dt = Math.min(
        (now - lastTime) / 1000,
        0.033
      )

      lastTime = now

      /*
       * Smooth cursor movement
       */
      mouse.x +=
        (mouse.targetX - mouse.x) * 0.1

      mouse.y +=
        (mouse.targetY - mouse.y) * 0.1

      ctx.clearRect(
        0,
        0,
        width,
        height
      )

      const pointCount = points.length

      /*
       * 1. PARTICLE MOVEMENT
       */

      for (let i = 0; i < pointCount; i += 1) {
        const point = points[i]

        point.pulse +=
          dt * point.pulseSpeed

        point.x +=
          point.vx * dt * 60

        point.y +=
          point.vy * dt * 60

        if (point.x < 0) {
          point.x = 0
          point.vx *= -1
        } else if (point.x > width) {
          point.x = width
          point.vx *= -1
        }

        if (point.y < 0) {
          point.y = 0
          point.vy *= -1
        } else if (point.y > height) {
          point.y = height
          point.vy *= -1
        }

        /*
         * Cursor repulsion
         */

        const dx =
          mouse.x - point.x

        const dy =
          mouse.y - point.y

        const distanceSquared =
          dx * dx + dy * dy

        if (
          distanceSquared < 40000 &&
          distanceSquared > 0
        ) {
          const distance =
            Math.sqrt(distanceSquared)

          const force =
            (1 - distance / 200) *
            30

          point.x -=
            (dx / distance) *
            force *
            dt *
            5

          point.y -=
            (dy / distance) *
            force *
            dt *
            5
        }
      }


      /*
       * 2. SPATIAL GRID
       */

      const cellSize = maxDistance

      const cols = Math.max(
        1,
        Math.ceil(width / cellSize)
      )

      const rows = Math.max(
        1,
        Math.ceil(height / cellSize)
      )

      const grid = Array.from(
        { length: cols },
        () =>
          Array.from(
            { length: rows },
            () => []
          )
      )

      for (let i = 0; i < pointCount; i += 1) {
        const column = Math.min(
          cols - 1,
          Math.max(
            0,
            Math.floor(
              points[i].x / cellSize
            )
          )
        )

        const row = Math.min(
          rows - 1,
          Math.max(
            0,
            Math.floor(
              points[i].y / cellSize
            )
          )
        )

        grid[column][row].push(i)
      }


      /*
       * 3. TRIANGULAR LATTICE
       */

      for (let c = 0; c < cols; c += 1) {
        for (let r = 0; r < rows; r += 1) {
          const cellPoints = grid[c][r]

          const neighbors = []

          for (
            let nc = Math.max(0, c - 1);
            nc <= Math.min(cols - 1, c + 1);
            nc += 1
          ) {
            for (
              let nr = Math.max(0, r - 1);
              nr <= Math.min(rows - 1, r + 1);
              nr += 1
            ) {
              const list = grid[nc][nr]

              for (
                let index = 0;
                index < list.length;
                index += 1
              ) {
                neighbors.push(list[index])
              }
            }
          }

          for (
            let i = 0;
            i < cellPoints.length;
            i += 1
          ) {
            const index1 = cellPoints[i]
            const point1 = points[index1]

            for (
              let j = 0;
              j < neighbors.length;
              j += 1
            ) {
              const index2 = neighbors[j]

              if (index1 >= index2) continue

              const point2 = points[index2]

              const dx12 =
                point1.x - point2.x

              const dy12 =
                point1.y - point2.y

              const distance12 =
                dx12 * dx12 +
                dy12 * dy12

              if (
                distance12 >
                maxDistanceSquared
              ) {
                continue
              }

              for (
                let k = j + 1;
                k < neighbors.length;
                k += 1
              ) {
                const index3 =
                  neighbors[k]

                if (index2 >= index3) continue

                const point3 =
                  points[index3]

                const dx23 =
                  point2.x - point3.x

                const dy23 =
                  point2.y - point3.y

                const distance23 =
                  dx23 * dx23 +
                  dy23 * dy23

                if (
                  distance23 >
                  maxDistanceSquared
                ) {
                  continue
                }

                const dx31 =
                  point3.x - point1.x

                const dy31 =
                  point3.y - point1.y

                const distance31 =
                  dx31 * dx31 +
                  dy31 * dy31

                if (
                  distance31 >
                  maxDistanceSquared
                ) {
                  continue
                }


                /*
                 * Triangle center
                 */

                const centerX =
                  (point1.x +
                    point2.x +
                    point3.x) /
                  3

                const centerY =
                  (point1.y +
                    point2.y +
                    point3.y) /
                  3

                const mouseDx =
                  mouse.x - centerX

                const mouseDy =
                  mouse.y - centerY

                const mouseDistanceSquared =
                  mouseDx * mouseDx +
                  mouseDy * mouseDy

                const nearMouse =
                  mouseDistanceSquared <
                  48400


                let fillAlpha = 0.018

                if (nearMouse) {
                  const distance =
                    Math.sqrt(
                      mouseDistanceSquared
                    )

                  fillAlpha =
                    (1 - distance / 220) *
                    0.12
                }


                /*
                 * Fill
                 */

                ctx.fillStyle = nearMouse
                  ? `rgba(111, 229, 234, ${fillAlpha})`
                  : `rgba(148, 163, 184, ${fillAlpha})`


                /*
                 * Lines
                 */

                ctx.strokeStyle = nearMouse
                  ? "rgba(97, 193, 219, 0.19)"
                  : "rgba(148, 163, 184, 0.055)"

                ctx.lineWidth =
                  nearMouse ? 0.8 : 0.45


                ctx.beginPath()

                ctx.moveTo(
                  point1.x,
                  point1.y
                )

                ctx.lineTo(
                  point2.x,
                  point2.y
                )

                ctx.lineTo(
                  point3.x,
                  point3.y
                )

                ctx.closePath()

                ctx.fill()
                ctx.stroke()
              }
            }
          }
        }
      }


      /*
       * 4. NODES + PULSES
       */

      for (
        let i = 0;
        i < pointCount;
        i += 1
      ) {
        const point = points[i]

        const dx =
          mouse.x - point.x

        const dy =
          mouse.y - point.y

        const nearMouse =
          dx * dx + dy * dy <
          48400

        const pulseRadius =
          1.4 +
          Math.sin(point.pulse) *
            0.55


        ctx.fillStyle = nearMouse
          ? "rgba(108, 214, 226, 0.9)"
          : "rgba(148, 163, 184, 0.35)"


        ctx.beginPath()

        ctx.arc(
          point.x,
          point.y,
          nearMouse
            ? 2.7
            : pulseRadius,
          0,
          Math.PI * 2
        )

        ctx.fill()


        if (nearMouse) {
          ctx.strokeStyle =
            "rgba(111, 229, 234, 0.25)"

          ctx.lineWidth = 0.8

          ctx.beginPath()

          ctx.arc(
            point.x,
            point.y,
            6 +
              Math.sin(
                point.pulse * 2
              ) *
                2,
            0,
            Math.PI * 2
          )

          ctx.stroke()
        }
      }

      animationFrameId =
        requestAnimationFrame(render)
    }

    animationFrameId =
      requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(
        animationFrameId
      )

      resizeObserver?.disconnect()

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      )
    }
  }, [])


  return (
    <div
      ref={containerRef}
      className="lattice-background"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="lattice-canvas"
      />
    </div>
  )
}

export default LatticeBackground