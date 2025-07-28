import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "University Name",
      location: "City, State",
      duration: "2021 - 2025",
      gpa: "8.5/10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "School Name",
      location: "City, State",
      duration: "2019 - 2021",
      gpa: "95%",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Academic journey and achievements</p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium text-lg">{edu.institution}</p>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold mb-2">
                    {edu.gpa}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar size={16} />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="bg-slate-700 text-gray-300 px-3 py-2 rounded-lg text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;