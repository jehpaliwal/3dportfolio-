const skillGroups = [
  {
    title: "Languages & Core",
    skills: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "AI & ML",
    skills: ["LangChain", "OpenAI", "Gemini", "scikit-learn", "N8N"],
  },
  {
    title: "Data & BI",
    skills: ["Power BI", "Pandas", "NumPy", "Matplotlib", "Excel"],
  },
  {
    title: "Web & Tools",
    skills: ["React", "Shopify", "Git", "GitHub", "Flask", "Supabase"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "ChromaDB"],
  },
  {
    title: "Core Strengths",
    skills: [
      "Prompt Engineering",
      "Experimentation",
      "Problem Solving",
      "Analytical Thinking",
    ],
  },
];

const TechStack = () => {
  return (
    <section className="techstack" aria-labelledby="skills-heading">
      <div className="techstack-inner">
        <div className="techstack-header">
          <p className="techstack-eyebrow" id="skills-heading">
            Skills
          </p>
        </div>

        <div className="techstack-grid">
          {skillGroups.map((group) => (
            <article className="techstack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="techstack-tags">
                {group.skills.map((skill) => (
                  <span className="techstack-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
