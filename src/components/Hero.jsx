import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Hero = () => {
  const { hero } = mockData;

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-400 font-mono text-lg tracking-wide">
                {hero.greeting}
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {hero.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">
                {hero.title}
              </h2>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                onClick={scrollToAbout}
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Download Resume
                <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {hero.socialLinks.map((social) => {
                const IconComponent = social.icon === 'Github' ? Github : 
                                   social.icon === 'Linkedin' ? Linkedin : Mail;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={hero.profileImage}
                    alt={hero.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;