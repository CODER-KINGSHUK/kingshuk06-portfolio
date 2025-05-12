
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="signature">Kingshuk</span>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} KINGSHUK. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
