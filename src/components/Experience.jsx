import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../data/mock';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                {/* Experience Card */}
                <Card className="md:ml-16 p-8 hover:shadow-lg transition-shadow duration-300 bg-white border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {job.position}
                      </h3>
                      <div className="flex items-center space-x-4 text-slate-600 mb-2">
                        <span className="text-lg font-semibold text-blue-600">
                          {job.company}
                        </span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{job.duration}</span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-700 flex items-start">
                          <span className="text-blue-500 mr-3 mt-2">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">
                      Technologies & Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-slate-100 text-slate-800 hover:bg-slate-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Throughout my career, I've developed expertise in Mobile Applications development, 
              team leadership, and creating scalable solutions that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1+</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Years Experience
              </h4>
              <p className="text-slate-600 text-sm">
                Professional software development
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Companies
              </h4>
              <p className="text-slate-600 text-sm">
                From startups to established firms
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">11+</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Projects
              </h4>
              <p className="text-slate-600 text-sm">
                Successfully delivered solutions
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and challenging projects. 
              Let's discuss how my experience can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Download Resume
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;