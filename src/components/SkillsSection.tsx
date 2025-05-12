
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
              { name: "HTML/CSS", icon: "code" },
              { name: "Canva", icon: "image" },
              { name: "Figma", icon: "figma" },
              { name: "Filmora", icon: "video" },
              { name: "Photoshop", icon: "file-image" },
              { name: "GitHub", icon: "github" },
              { name: "VS Code", icon: "file-code" },
            ].map((tool, index) => (
              <div 
                key={tool.name}
                className={`flex flex-col items-center transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="tool-icon mb-2">
                  <span className="lucide-icon">
                    {tool.icon === "code" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>}
                    {tool.icon === "image" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>}
                    {tool.icon === "figma" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>}
                    {tool.icon === "video" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>}
                    {tool.icon === "file-image" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"/></svg>}
                    {tool.icon === "github" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                    {tool.icon === "file-code" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>}
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
