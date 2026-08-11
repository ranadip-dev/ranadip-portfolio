import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaMobileAlt,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import {
  SiMysql,
  SiVite,
} from "react-icons/si"

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        level: "Advanced",
        levelClass: "advanced",
        strength: 90,
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        level: "Advanced",
        levelClass: "advanced",
        strength: 88,
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 72,
        icon: FaJs,
      },
      {
        name: "React",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 68,
        icon: FaReact,
      },
      {
        name: "Responsive Design",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 78,
        icon: FaMobileAlt,
      },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      {
        name: "PHP",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 72,
        icon: FaPhp,
      },
      {
        name: "MySQL",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 74,
        icon: SiMysql,
      },
      {
        name: "PDO",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 70,
        icon: FaDatabase,
      },
    ],
  },

  {
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 68,
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 72,
        icon: FaGithub,
      },
      {
        name: "Vite",
        level: "Working Knowledge",
        levelClass: "working",
        strength: 58,
        icon: SiVite,
      },
      {
        name: "VS Code",
        level: "Advanced",
        levelClass: "advanced",
        strength: 88,
        icon: FaDatabase,
      },
      {
        name: "XAMPP",
        level: "Intermediate",
        levelClass: "intermediate",
        strength: 75,
        icon: FaDatabase,
      },
    ],
  },
]


function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-label">SKILLS</p>
            <h2>Technologies I work with.</h2>
          </div>
        </div>

        <div className="skills-groups">

          {skillGroups.map((group) => (
            <div className="skills-category" key={group.title}>

              <div className="skills-category-heading">
                <h3>{group.title}</h3>
              </div>

              <div className="skills-cards">

                {group.skills.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <article className="skill-card" key={skill.name}>

                      <div className="skill-icon">
                        <Icon />
                      </div>

                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className={`skill-level ${skill.levelClass}`}>
                          {skill.level}
                        </span>
                      </div>

                      <div className={`skill-progress ${skill.levelClass}`}>
                        <span
                          style={{ width: `${skill.strength}%` }}
                        ></span>
                      </div>

                    </article>
                  )
                })}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}


export default Skills