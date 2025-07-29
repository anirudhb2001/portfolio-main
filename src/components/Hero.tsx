import React from 'react';
import { ChevronDown, Code, Database, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Code size={48} className="text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Anirudh B
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-delay-1">
          Computer Science & Engineering Student
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Passionate about building innovative solutions through code. Specializing in full-stack development,
          data structures, and modern web technologies.
        </p>
        
        {/* Tech Icons */}
        <div className="flex justify-center space-x-8 mb-12 animate-fade-in-delay-3">
          <div className="flex flex-col items-center space-y-2">
            <Code size={32} className="text-blue-400" />
            <span className="text-sm text-gray-400">Frontend</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Database size={32} className="text-green-400" />
            <span className="text-sm text-gray-400">Backend</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Cpu size={32} className="text-purple-400" />
            <span className="text-sm text-gray-400">Systems</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-4">
          <button
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-semibold"
          >
            Learn More
          </button>
          <button className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg transition-all duration-200 font-semibold">
            View Projects
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;