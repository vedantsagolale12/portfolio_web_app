import React from 'react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Card } from './ui/card';
import { mockData } from '../data/mock';

// Icons
import { Code2, Server, Database, Wrench } from 'lucide-react';

const SkillCategory = ({ title, items, color, icon: Icon }) => (
  <Card
    className={`p-6 relative border-${color}-200 bg-gradient-to-br from-${color}-50 to-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300`}
  >
    <div className="flex items-center gap-2 mb-4">
      <div
        className={`p-2 rounded-lg bg-${color}-100 text-${color}-700 shadow-inner`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <Badge
          key={index}
          variant="secondary"
          className={`bg-${color}-100 text-${color}-800 hover:scale-105 hover:bg-${color}-200 transition-all duration-200 cursor-default`}
        >
          {item}
        </Badge>
      ))}
    </div>
  </Card>
);

const Skills = () => {
  const { skills } = mockData;

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-900">{skill.name}</span>
                    <span className="text-sm text-slate-600">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-3 rounded-full overflow-hidden"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Categories with Icons */}
          <div className="space-y-8">
            <SkillCategory
              title="Frontend Development"
              items={skills.categories.frontend}
              color="blue"
              icon={Code2}
            />
            <SkillCategory
              title="Backend Development"
              items={skills.categories.backend}
              color="emerald"
              icon={Server}
            />
            <SkillCategory
              title="Database & Cloud"
              items={skills.categories.database}
              color="purple"
              icon={Database}
            />
            <SkillCategory
              title="Tools & Others"
              items={skills.categories.tools}
              color="orange"
              icon={Wrench}
            />
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white font-bold text-xl">
                    {cert.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-1">
                  {cert.name}
                </h4>
                <p className="text-slate-600 text-sm">{cert.issuer}</p>
                <p className="text-slate-500 text-xs">{cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
