
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container px-4 mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h3 className={`text-xl md:text-2xl font-semibold mb-4 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
                style={{ transitionDelay: '200ms' }}>
              Commerce Student with Creative Passion
            </h3>
            <p className={`text-gray-300 mb-6 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '300ms' }}>
              I'm currently a Class 11 Commerce student with a deep interest in the intersection of business and design. My journey began with exploring basic web design principles, which quickly evolved into a passion for creating beautiful, functional digital experiences.
            </p>
            <p className={`text-gray-300 mb-6 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '400ms' }}>
              Despite being early in my educational journey, I've dedicated significant time to developing my skills in UX/UI design, video editing, and web development. I believe that commerce and design complement each other perfectly—understanding business needs helps me create more effective design solutions.
            </p>
            <p className={`text-primary font-medium transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '500ms' }}>
              My goal is to build a career that combines my commerce background with my creative and technical abilities.
            </p>
          </div>
          
          <div className={`w-full md:w-5/12 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '600ms' }}>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Personal Details</h3>
              
              <div className="space-y-4">
                <div className={`grid grid-cols-3 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
                     style={{ transitionDelay: '700ms' }}>
                  <span className="text-gray-400">Education:</span>
                  <span className="col-span-2">Class 11 Commerce</span>
                </div>
                
                <div className={`grid grid-cols-3 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
                     style={{ transitionDelay: '800ms' }}>
                  <span className="text-gray-400">Phone:</span>
                  <span className="col-span-2">+919883125072</span>
                </div>
                
                <div className={`grid grid-cols-3 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
                     style={{ transitionDelay: '900ms' }}>
                  <span className="text-gray-400">Email:</span>
                  <span className="col-span-2 break-words">kingshukpaulchowdhury@gmail.com</span>
                </div>
                
                <div className={`grid grid-cols-3 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
                     style={{ transitionDelay: '1000ms' }}>
                  <span className="text-gray-400">Language:</span>
                  <span className="col-span-2">English, Hindi, Bengali</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
