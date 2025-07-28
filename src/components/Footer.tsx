import React from 'react';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Anirudh B Nair</h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Science & Engineering Student passionate about creating innovative solutions through code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/anirudhb2001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/anirudh-b-nair-9745elkm/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="mailto:anirudhbelkm29@email.com"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#certifications", label: "Certifications" },
                { href: "#internships", label: "Experience" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 anirudhbelkm29@email.com</p>
              <p>📱 +91 9745923295</p>
              <p>📍 Kerala, India</p>
            </div>
            <div className="mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
                Download Resume
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Anirudh B Nair</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-400" />
            </div>
            <div className="text-gray-400 text-sm">
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;