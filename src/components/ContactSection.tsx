
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container px-4 mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className={`text-gray-300 mt-6 max-w-2xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
             style={{ transitionDelay: '200ms' }}>
            I'm always open to new opportunities, collaborations, and discussions.
            Feel free to reach out to me through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
               style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className={`flex items-center transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
                   style={{ transitionDelay: '400ms' }}>
                <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-medium">+919883125072</p>
                </div>
              </div>
              
              <div className={`flex items-center transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
                   style={{ transitionDelay: '500ms' }}>
                <div className="flex-shrink-0 h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium break-words">kingshukpaulchowdhury@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className={`mt-8 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                 style={{ transitionDelay: '600ms' }}>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/ig_prince08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-icon transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 scale-75'}`}
                  aria-label="Instagram"
                  style={{ transitionDelay: '700ms' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.facebook.com/kingshuk.paulchowdhury.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-icon transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 scale-75'}`}
                  aria-label="Facebook"
                  style={{ transitionDelay: '800ms' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com/CODER-KINGSHUK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-icon transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 scale-75'}`}
                  aria-label="GitHub"
                  style={{ transitionDelay: '900ms' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
               style={{ transitionDelay: '400ms' }}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
                   style={{ transitionDelay: '500ms' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" 
                  placeholder="Your Name"
                />
              </div>
              
              <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
                   style={{ transitionDelay: '600ms' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" 
                  placeholder="Your Email"
                />
              </div>
              
              <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
                   style={{ transitionDelay: '700ms' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className={`px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-all duration-500 w-full md:w-auto ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '800ms' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
