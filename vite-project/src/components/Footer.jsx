import React, { useState } from 'react';
import { Mail, Github, Instagram, Code2, MessageCircle, RefreshCw, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/socialLinks';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(data.message);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setSuccess('');
      }, 5000);
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      url: SOCIAL_LINKS.github, 
      label: 'GitHub',
      color: 'hover:border-gray-300'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: SOCIAL_LINKS.instagram, 
      label: 'Instagram',
      color: 'hover:border-pink-500'
    },
    { 
      icon: <Code2 className="w-5 h-5" />, 
      url: SOCIAL_LINKS.leetcode, 
      label: 'LeetCode',
      color: 'hover:border-yellow-500'
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      url: SOCIAL_LINKS.codeforces, 
      label: 'Codeforces',
      color: 'hover:border-blue-500'
    },
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Works', id: 'works' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const YouTubeIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  return (
    <div id="contact" className="min-h-screen bg-[#101010] pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white">
            Let's Connect<span className="animate-pulse">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Column 1: About & Social Links */}
          <div className="space-y-8 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                About
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Full-stack developer and AI enthusiast passionate about crafting elegant solutions and pushing boundaries in web development and competitive programming.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Me</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-white transition-all duration-300 ${social.color} hover:bg-gray-900 group`}
                  >
                    {social.icon}
                    <span className="text-xs font-medium hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* YouTube and Email */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-500 transition-all duration-300 hover:bg-gray-900"
                >
                  <YouTubeIcon />
                  <span className="text-xs font-medium hidden sm:inline">YouTube</span>
                </a>
                <a
                  href={SOCIAL_LINKS.email}
                  aria-label="Email"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 hover:bg-gray-900"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-xs font-medium hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group cursor-pointer bg-transparent border-none w-full text-left"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-600" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Form */}
          <div className="space-y-6 md:col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors duration-300 text-sm disabled:opacity-50"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors duration-300 text-sm disabled:opacity-50"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows="3"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors duration-300 resize-none text-sm disabled:opacity-50"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-3 p-3 bg-red-900/20 border border-red-700 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-700 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-400">{success}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || submitted}
                className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : loading
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700 border border-red-600'
                }`}
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2025 Unbounded Raj. All rights reserved.</p>
          <div className="flex gap-6 text-xs sm:text-sm">
            <a href="mailto:unboundedraj@gmail.com" className="hover:text-white transition-colors duration-300">Contact</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;