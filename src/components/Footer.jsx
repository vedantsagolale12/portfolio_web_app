import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MobileDev</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Welcome to my portfolio website! I'm a passionate front-end developer with a
              focus on creating user-friendly and visually appealing mobile application.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>vedantsagolale12</p>
              <p>+91 7768089377</p>
              <p>Nagpur, Maharashtra,India</p>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Vedant Sagolale. All rights reserved.
          </div>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-blue-400"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;