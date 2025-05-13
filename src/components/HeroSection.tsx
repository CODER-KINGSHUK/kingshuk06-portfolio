
import React, { useState, useEffect } from 'react';

const roles = [
  "UX UI Designer",
  "Editor",
  "Program Analyser",
  "Web Developer"
];

const HeroSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="opacity-0 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl md:text-2xl mb-4 text-primary opacity-0 animate-fadeUp" style={{ animationDelay: '0.4s' }}>Hello, I'm</h2>
              <h1 className="hero-name gradient-text mb-4 opacity-0 animate-fadeUp" style={{ animationDelay: '0.5s' }}>KINGSHUK</h1>
              
              <div className="h-8 md:h-10 mb-6">
                <p className="text-xl md:text-2xl font-light animate-glow opacity-0 animate-fadeUp" style={{ animationDelay: '0.6s' }}>
                  {roles[currentRole]}
                </p>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 opacity-0 animate-fadeUp max-w-xl" style={{ animationDelay: '0.7s' }}>
                A commerce student with a passion for design and development. 
                Creating digital experiences that blend creativity with functionality.
              </p>
              
              <div className="flex space-x-4 opacity-0 animate-fadeUp" style={{ animationDelay: '0.8s' }}>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-all duration-300"
                >
                  Contact Me
                </a>
                <a 
                  href="#about" 
                  className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="profile-outline w-64 h-64 md:w-80 md:h-80 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <img 
                src="/lovable-uploads/f7317a73-01d2-44fa-ae21-bccf7996d73f.png" 
                alt="Kingshuk's Profile" 
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
