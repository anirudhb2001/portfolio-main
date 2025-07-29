import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Enter your name',
    email: 'Enter your email',
    subject: 'Enter subject',
    message: 'enter your message'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Let's discuss opportunities and collaborations</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities, interesting projects, and connecting with fellow developers. 
                Feel free to reach out if you'd like to discuss potential collaborations or just want to say hello!
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">anirudhbelkm29@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+91 9745923295</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Kerala, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/anirudhb2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-200"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anirudh-b-nair-9745elkm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-200"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="https://x.com/AnirudhB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-200"
                >
                  <Twitter size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;