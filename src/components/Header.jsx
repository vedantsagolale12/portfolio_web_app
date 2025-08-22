import React, { useState } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MobileDev</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-blue-400 hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg mt-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center space-x-3 w-full px-3 py-2 text-left text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;