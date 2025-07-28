import React from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 size={24} />,
      color: "bg-blue-600",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "Python", level: 82 },
        { name: "JavaScript", level: 88 },
        { name: "Dart", level: 70 }
      ]
    },
    {
      category: "Web Technologies",
      icon: <Globe size={24} />,
      color: "bg-green-600",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      category: "Database & Backend",
      icon: <Database size={24} />,
      color: "bg-purple-600",
      skills: [
        { name: "SQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      category: "Tools & Frameworks",
      icon: <Smartphone size={24} />,
      color: "bg-orange-600",
      skills: [
        { name: "Git", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`${category.color} p-3 rounded-lg text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Data Structures", "Algorithms", "OOP", "Problem Solving",
              "Version Control", "Agile Development", "Testing", "Documentation"
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-slate-700 hover:bg-blue-600 text-gray-300 hover:text-white px-6 py-3 rounded-full transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;