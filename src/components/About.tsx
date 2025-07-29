import React from 'react';
import { User, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <User size={120} className="text-white opacity-80" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <Award size={32} className="text-white" />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate Computer Science Student
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a dedicated Computer Science and Engineering student with a strong foundation in 
                programming languages and modern web technologies. My journey in tech has been driven 
                by curiosity and a desire to create impactful solutions.
              </p>
            </div>
            
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                With hands-on experience in full-stack development, I enjoy working on projects that 
                challenge me to think critically and implement efficient algorithms. I'm particularly 
                interested in web development, data structures, and software engineering principles.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <Target className="text-blue-400" size={20} />
                <span className="text-gray-300">Problem Solver</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="text-green-400" size={20} />
                <span className="text-gray-300">Team Player</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="text-purple-400" size={20} />
                <span className="text-gray-300">Quick Learner</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="text-orange-400" size={20} />
                <span className="text-gray-300">Detail Oriented</span>
              </div>
            </div>
            
            <div className="pt-6">
              <a
  href="Anirudh_B_Nair_Resume (4).pdf"
  download
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
>
  Download Resume
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;