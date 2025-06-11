
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with a keen eye for design and a love for creating 
                seamless user experiences. With expertise in modern web technologies, I bridge the gap 
                between design and development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech has led me to work on diverse projects, from responsive web applications 
                to complex enterprise solutions. I believe in writing clean, maintainable code while 
                delivering pixel-perfect designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying the great outdoors with my camera.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/lovable-uploads/65767b0d-5724-4180-b2c9-0a2f71e69a8f.png"
                    alt="Ram Mohan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
