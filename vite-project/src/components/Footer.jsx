import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Send } from 'lucide-react';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! (This is a demo)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, url: '#', label: 'LinkedIn' },
    { icon: <Github className="w-6 h-6" />, url: '#', label: 'GitHub' },
    { icon: <Twitter className="w-6 h-6" />, url: '#', label: 'Twitter' },
    { icon: <Instagram className="w-6 h-6" />, url: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Works', url: '#works' },
    { name: 'Skills', url: '#skills' },
    { name: 'Blog', url: '#blog' }
  ];

  return (
    <div className="min-h-screen rounded-t-[100px] bg-black pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About & Social */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Unbounded Raj</h2>
            <p className="text-gray-400 leading-relaxed">
              Full-stack developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-gray-900 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:john.doe@example.com" className="hover:text-white transition-colors">
                    john.doe@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-1 text-green-400" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 text-red-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2025 Unbounded Raj. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;