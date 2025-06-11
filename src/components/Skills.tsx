
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 80 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Frontend</h3>
              <p className="text-muted-foreground">React, Vue, Angular, TypeScript, Tailwind CSS</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Backend</h3>
              <p className="text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Tools</h3>
              <p className="text-muted-foreground">Git, Docker, AWS, Figma, VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
