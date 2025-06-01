
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const AchievementsSection: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My <span className="gradient-text">Achievements</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className={`text-gray-300 mt-6 max-w-2xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            Celebrating milestones and certifications that showcase my commitment to continuous learning and professional growth.
          </p>
        </div>

        <div className="flex justify-center">
          <div className={`max-w-lg transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-center">Certificate of Figma</h3>
              <div 
                className="cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                onClick={() => setIsImageOpen(true)}
              >
                <img 
                  src="/lovable-uploads/e434df27-e3de-408e-ac85-02e81c07110c.png"
                  alt="Certificate of Figma"
                  className="w-full h-auto rounded-lg shadow-md max-w-sm mx-auto"
                />
              </div>
              <p className="text-gray-400 text-center mt-4">Click to view in full screen</p>
            </div>
          </div>
        </div>

        {/* Full Screen Image Modal */}
        <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
          <DialogContent className="max-w-none w-full h-full p-0 bg-black/95 border-none [&>button]:hidden">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Custom Close Button */}
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 group"
                aria-label="Close full screen view"
              >
                <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              {/* Responsive Image Container */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e434df27-e3de-408e-ac85-02e81c07110c.png"
                  alt="Certificate of Figma - Full View"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  style={{ maxWidth: '95vw', maxHeight: '90vh' }}
                />
              </div>
              
              {/* Click outside to close hint */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
                Click outside or press ESC to close
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AchievementsSection;
