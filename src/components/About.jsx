import React from 'react';
import { Code, Zap, Users, Trophy } from 'lucide-react';
import { Card } from './ui/card';
import { mockData } from '../data/mock';

const About = () => {
  const { about } = mockData;

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in cross-functional teams'
    },
    {
      icon: Trophy,
      title: 'Innovation',
      description: 'Staying current with latest technologies and trends'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {about.title}
            </h3>
            
            <div className="space-y-4 text-slate-700 leading-relaxed">
              {about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {about.stats.experience}
                </div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {about.stats.projects}
                </div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={about.image}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white border-slate-200">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {highlight.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;