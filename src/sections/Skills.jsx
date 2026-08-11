const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'HTML',
        description: 'Semantic page structure and accessible markup.',
      },
      {
        name: 'CSS',
        description: 'Responsive layouts, custom styling and interface design.',
      },
      {
        name: 'JavaScript',
        description: 'Interactive behavior, DOM logic and frontend functionality.',
      },
      {
        name: 'React',
        description: 'Component-based frontend development and reusable UI.',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'PHP',
        description: 'Authentication, application logic and server-side workflows.',
      },
    ],
  },
  {
    title: 'Database',
    skills: [
      {
        name: 'MySQL',
        description: 'Relational data, queries and application database design.',
      },
      {
        name: 'RDBMS',
        description: 'Relational concepts, keys, relationships and normalization.',
      },
    ],
  },
  {
    title: 'Development',
    skills: [
      {
        name: 'Responsive Design',
        description: 'Interfaces designed to adapt across desktop and mobile.',
      },
      {
        name: 'Authentication',
        description: 'Login flows, access control and protected user areas.',
      },
      {
        name: 'Session Management',
        description: 'Maintaining secure authenticated user sessions.',
      },
      {
        name: 'SDLC',
        description: 'Structured planning, development, testing and improvement.',
      },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      {
        name: 'Git',
        description: 'Version control and structured development history.',
      },
      {
        name: 'GitHub',
        description: 'Repository management, collaboration and project publishing.',
      },
      {
        name: 'VS Code',
        description: 'Primary development environment.',
      },
    ],
  },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-heading">
          <p className="section-label">02 / Technical Toolkit</p>

          <h2>
            Technologies I work with,
            <span> organized by how I use them.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <strong>{skill.name}</strong>
                    <p>{skill.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills