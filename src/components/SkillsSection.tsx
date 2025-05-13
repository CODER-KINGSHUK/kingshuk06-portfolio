
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Html, FileImage, Figma, Film, Github, FileCode } from 'lucide-react'; 

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "UI/UX Design", percentage: 85 },
  { name: "Video Editing", percentage: 80 },
  { name: "Web Design", percentage: 75 },
  { name: "HTML/CSS", percentage: 70 },
  { name: "Program Analysis", percentage: 65 },
];

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My <span className="gradient-text">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I've developed a diverse set of skills that allow me to create engaging digital experiences.
            Here's a snapshot of my technical and creative capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: inView ? `${skill.percentage}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Tools & Technologies</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { name: "HTML/CSS", icon: "html" },
              { name: "Canva", icon: "image" },
              { name: "Figma", icon: "figma" },
              { name: "Filmora", icon: "film" },
              { name: "Photoshop", icon: "adobe-photoshop" },
              { name: "GitHub", icon: "github" },
              { name: "VS Code", icon: "vs-code" },
            ].map((tool, index) => (
              <div 
                key={tool.name}
                className={`flex flex-col items-center transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="tool-icon mb-2">
                  <span className="lucide-icon">
                    {tool.icon === "html" && <Html size={24} className="text-primary" />}
                    {tool.icon === "image" && <FileImage size={24} className="text-primary" />}
                    {tool.icon === "figma" && <Figma size={24} className="text-primary" />}
                    {tool.icon === "film" && <Film size={24} className="text-primary" />}
                    {tool.icon === "adobe-photoshop" && 
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M7.5 3h9v18h-9z"></path>
                        <path d="M3 3h4.5v18H3z"></path>
                        <path d="M16.5 3H21v18h-4.5z"></path>
                      </svg>
                    }
                    {tool.icon === "github" && <Github size={24} className="text-primary" />}
                    {tool.icon === "vs-code" && <FileCode size={24} className="text-primary" />}
                  </span>
                </div>
                <span className="text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
