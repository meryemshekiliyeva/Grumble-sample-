import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Grumble. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link to="/privacy" className="text-sm hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;