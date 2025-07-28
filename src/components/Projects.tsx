import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
      icon: <Code size={24} />,
      color: "bg-blue-600",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management application with real-time updates, user collaboration, and project tracking capabilities.",
      technologies: ["Java", "Spring Boot", "MySQL", "React", "Bootstrap"],
      icon: <Database size={24} />,
      color: "bg-green-600",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A mobile-responsive weather application that provides real-time weather data with location-based forecasts and interactive maps.",
      technologies: ["Python", "Flask", "HTML5", "CSS", "JavaScript"],
      icon: <Smartphone size={24} />,
      color: "bg-purple-600",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Student Management System",
      description: "A desktop application for managing student records, grades, and academic performance with advanced reporting features.",
      technologies: ["C++", "Qt", "SQLite", "CSS"],
      icon: <Code size={24} />,
      color: "bg-orange-600",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design principles and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5"],
      icon: <Code size={24} />,
      color: "bg-pink-600",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data analysis and visualization with charts, graphs, and real-time data processing.",
      technologies: ["Python", "Dash", "Plotly", "Pandas", "SQL"],
      icon: <Database size={24} />,
      color: "bg-indigo-600",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Some of my notable work and contributions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              {/* Project Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`${project.color} p-3 rounded-lg text-white`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              
              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-semibold">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;