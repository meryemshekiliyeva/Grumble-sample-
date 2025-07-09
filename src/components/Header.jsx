import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="font-bold text-lg">Grumble</span>
        </NavLink>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLink
            to="/complaints"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'transition-colors hover:text-primary'
            }
          >
            Complaints
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'transition-colors hover:text-primary'
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'transition-colors hover:text-primary'
            }
          >
            About
          </NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/new-complaint" className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90">
            New Complaint
          </Link>
          <Link to="/login" className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;