import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const experiences = [
    
      {
      company: "Suffix solutions",
      position: "Mobile App Development Intern",
      duration: "Jan 2024 - Mar 2024",
      location: "Kochi, India",
      type: "Internship",
      description: "Contributed to cross-platform mobile application development using Flutter, focusing on UI/UX implementation and API integration.",
      achievements: [
        "Built 5+ mobile app screens with pixel-perfect UI implementation",
        "Integrated third-party APIs for payment and authentication",
        "Participated in code reviews and learned best practices",
        "Delivered features ahead of schedule consistently"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "UI/UX"]
    },
    
   
    {
      position: "Data Science Intern",
      company: "Scope India,Suffix solutions",
      location: "Kochi, India",
      duration: "Jun 2023 - Aug 2023",
      type: "online internship",
      description: "Assisted in data analysis and visualization projects, focusing on extracting insights from large datasets and creating interactive dashboards.",
      achievements: [
        "Analyzed datasets using Python and Pandas to derive actionable insights",
        "Created interactive dashboards using Tableau for data visualization",
        "Collaborated with a team of data scientists to improve data processing workflows",
        "Presented findings to stakeholders, enhancing decision-making processes"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Tableau", "SQL"],
    }
  ];

  return (
    <section id="internships" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Internship Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Professional experience and industry exposure</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.position}</h3>
                    <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 flex flex-col lg:items-end space-y-2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {exp.type}
                  </span>
                </div>
              </div>
              
              {/* Details */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
                {/* <div className="flex items-center space-x-2 text-gray-300">
                  <Users size={16} />
                  <span>{exp.teamSize}</span>
                </div> */}
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700 text-purple-400 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Open to new opportunities and challenges</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-semibold">
            View Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Internships;