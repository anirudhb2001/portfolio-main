import React from 'react';
import { Award, Calendar,  } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
 title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2022",
      credentialId: "WDB-2022-789",
      description: "Full-stack web development course covering HTML, CSS, JavaScript, and modern frameworks.",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      // verifyUrl: "#"
    },

    {
      title: "Flutter Development Course",
      issuer: "Scope India",
      date: "2023",
      credentialId: "GD-345678",
      skills: ["Flutter", "Dart", "Mobile Development", "UI/UX Design"],
      description: "In-depth course on Flutter for building cross-platform mobile applications with a focus on UI/UX design.",
      //verifyUrl: "#"
    },
   {
      title: "Data Science",
      issuer: "Scope India",
      date: "2025",
      credentialId: "DS-2025-123",
      description: "Comprehensive course on data science fundamentals, including data analysis, machine learning, and visualization.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy"],
     // verifyUrl: "#"
   },
    {
      title: "React Developer Certification",
      issuer: "Oneteam",
      date: "2023",
      credentialId: "META-REACT-2023",
      description: "Advanced React certification covering hooks, state management, and modern React development practices.",
      skills: ["React", "JavaScript", "Redux", "Component Design"],
      //verifyUrl: "#"
    },
    {
      title: "Python Programming Certificate",
      issuer: "Python Institute",
      date: "2023",
      credentialId: "PCAP-2023-456",
      description: "Professional certification in Python programming with focus on data structures and algorithm implementation.",
      skills: ["Python", "Data Analysis", "Web Development", "APIs"],
      //verifyUrl: "#"
    },
    {
      title: "Database Management Systems",
      issuer: "IBM",
      date: "2023",
      credentialId: "IBM-DB-2023",
      description: "Comprehensive course on database design, SQL optimization, and database administration.",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Modeling"],
     // verifyUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Professional certifications and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
              {/* Certificate Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-yellow-600 p-3 rounded-lg text-white flex-shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-blue-400 font-medium">{cert.issuer}</p>
                </div>
              </div>
              
              {/* Date and Credential */}
              <div className="flex items-center space-x-2 mb-4 text-gray-300">
                <Calendar size={16} />
                <span>{cert.date}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm">ID: {cert.credentialId}</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>
              
              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2 text-sm">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {(cert.skills ?? []).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-slate-700 text-green-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              Verify Link
              {/* <a
                href={cert.verifyUrl}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
              > */}
                {/* <ExternalLink size={14} />
                <span>Verify Certificate</span>
              </a> */}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Continuously learning and improving my skills</p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-semibold">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;