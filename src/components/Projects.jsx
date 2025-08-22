import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../data/mock';

const Projects = () => {
  const { projects } = mockData;
  const [filter, setFilter] = useState('all');

  // Get unique technologies for filter
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Highlighted Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-slate-200">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-slate-900">{project.title}</h4>
                    <Badge className="bg-blue-100 text-blue-800">Featured</Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-300 text-slate-700 hover:bg-slate-100"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-slate-600" />
            <h3 className="text-xl font-semibold text-slate-900">Filter by Technology</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-blue-500 hover:bg-blue-600' : ''}
            >
              All Projects
            </Button>
            {allTechnologies.slice(0, 8).map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(tech)}
                className={filter === tech ? 'bg-blue-500 hover:bg-blue-600' : ''}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-slate-200">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {project.title}
                </h4>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white flex-1"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Interested in My Work?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              These are just a few examples of my projects. I'm always working on something new and exciting. 
              Let's discuss how we can work together on your next project.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full"
            >
              View All Projects on GitHub
              <Github className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;