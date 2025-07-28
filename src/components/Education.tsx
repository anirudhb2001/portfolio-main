import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "College of Engineering Kidangoor",
      location: "Kottayam, Kerala",
      duration: "2023 - 2026",
     // grade: "CGPA: 8.5/10",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, DBMS, OOP",
        "Active member of Computer Science Society",
        // "Participated in multiple coding competitions and hackathons"
      ]
    },
    {
      degree: "Diploma in Computer Engoineering",
      field: "Computer Science",
      institution: "Government Polytechnic College, Pala",
      location: "Kottayam, Kerala",
      duration: "2019 - 2022",
      grade: "first class",
      highlights: [
        "Specialized in software development and programming languages",
        "Developed several projects in HTML,CSS and JavaScript",
        "Member of the college union and technical club"
      ]
    },
    {
      degree: "Higher Secondary Education",
      field: "Science Stream (PCM)",
      institution: "St. Thomas HSS, Pala",
      location: "kottayam, Kerala", 
      duration: "2017 - 2019",
      grade: "Percentage: 80%",
      highlights: [
        "Mathematics, Physics, Chemistry focus",
        "Computer Science as additional subject",
        "School programming club member"
      ]
    },
    {
degree: "Secondary School Certificate",
      field: "General Education",
      institution: "St. Joseph's HSS, Vilakkumadom",
      location: "Kottayam, Kerala",
      duration: "2016 - 2017",
      grade: "98%",
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
                    {edu.grade}
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
                 {edu.highlights && (
  <div>
    <h4 className="text-white font-semibold mb-3">Highlights:</h4>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      {edu.highlights.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)}
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