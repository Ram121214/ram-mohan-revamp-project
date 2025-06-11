
import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Professional level certification for designing distributed systems on AWS',
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      description: 'Advanced certification for building scalable applications on Google Cloud',
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      description: 'Comprehensive certification covering React ecosystem and best practices',
    },
  ];

  const achievements = [
    {
      title: 'Open Source Contributor',
      description: '50+ contributions to popular React libraries',
      icon: '🚀',
    },
    {
      title: 'Tech Speaker',
      description: 'Presented at 5+ local tech meetups',
      icon: '🎤',
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in Regional Hackathon 2023',
      icon: '🏆',
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Certifications & Achievements</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
                <Award className="mr-3" size={28} />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-primary">{cert.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>
                    <p className="text-secondary-foreground font-medium mb-2">{cert.issuer}</p>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
