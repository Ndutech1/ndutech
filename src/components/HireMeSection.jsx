import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send 
} from 'lucide-react';

const HireMeSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectType: '',
    projectDescription: '',
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    preferredContact: ['whatsapp']
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactToggle = (method) => {
    setFormData((prev) => {
      const exists = prev.preferredContact.includes(method);
      if (exists) {
        return {
          ...prev,
          preferredContact: prev.preferredContact.filter((item) => item !== method)
        };
      } else {
        return {
          ...prev,
          preferredContact: [...prev.preferredContact, method]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const contactOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Fastest — I reply here most',
      icon: MessageSquare
    },
    {
      id: 'email',
      title: 'Email',
      subtitle: 'Good for detail and attachments',
      icon: Mail
    },
    {
      id: 'phone',
      title: 'Phone call',
      subtitle: 'For a quick conversation',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 flex flex-col items-center justify-center font-sans text-slate-100">
      
      {/* Top Navigation / Back Button */}
      <motion.div 
        className="w-full max-w-xl mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-2 text-sm font-medium text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-white transition duration-200"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          Back to Home
        </button>
      </motion.div>

      {/* Main Form Container Card */}
      <motion.div 
        className="w-full max-w-xl rounded-[32px] border border-white/10 bg-slate-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-2">
            Get In Touch
          </p>
          <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Send a <span className="text-cyan-400">request</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Tell me about your project and how I can help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* What do you want me to build? */}
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              What do you want me to build?
            </label>
            <div className="relative">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3.5 text-sm text-slate-100 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Choose a project type...
                </option>
                <option value="mobile" className="bg-slate-900 text-slate-100">
                  Mobile app — iOS or Android app
                </option>
                <option value="web" className="bg-slate-900 text-slate-100">
                  Web app — Website or web platform
                </option>
                <option value="ai" className="bg-slate-900 text-slate-100">
                  AI system — Chatbot, automation, AI tool
                </option>
                <option value="other" className="bg-slate-900 text-slate-100">
                  Other — Something different
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cyan-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Describe your project */}
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              Describe your project
            </label>
            <textarea
              name="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={handleInputChange}
              placeholder="Write a brief description of your project..."
              className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition resize-y"
            />
          </div>

          {/* Your name */}
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              Your name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-4 h-4 w-4 text-slate-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/90 pl-11 pr-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              Email
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 h-4 w-4 text-slate-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/90 pl-11 pr-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
              />
            </div>
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              Phone number
            </label>
            <div className="relative flex items-center">
              <Phone className="absolute left-4 h-4 w-4 text-slate-500" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/90 pl-11 pr-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
              />
            </div>
          </div>

          {/* WhatsApp number */}
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              WhatsApp number
            </label>
            <div className="relative flex items-center">
              <MessageSquare className="absolute left-4 h-4 w-4 text-slate-500" />
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="Enter your WhatsApp number"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/90 pl-11 pr-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
              />
            </div>
          </div>

          {/* Preferred Reach Method */}
          <div className="pt-2">
            <div className="flex items-baseline justify-between mb-3">
              <label className="text-sm font-semibold text-slate-200">
                How should I reach you?
              </label>
              <span className="text-xs text-slate-500">
                Pick any that work
              </span>
            </div>

            <div className="space-y-3">
              {contactOptions.map((option) => {
                const IconComponent = option.icon;
                const isSelected = formData.preferredContact.includes(option.id);

                return (
                  <div
                    key={option.id}
                    onClick={() => handleContactToggle(option.id)}
                    className={`cursor-pointer flex items-center justify-between rounded-2xl p-4 border transition-all ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-950/30 ring-1 ring-cyan-500/50'
                        : 'border-white/10 bg-slate-950/60 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        isSelected 
                          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400' 
                          : 'bg-slate-900 border-white/10 text-slate-400'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {option.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Checkbox */}
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-md border transition ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500 text-slate-950'
                          : 'border-slate-700 bg-slate-900'
                      }`}
                    >
                      {isSelected && (
                        <svg className="h-3.5 w-3.5 fill-current font-bold" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-4 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-sky-400 active:scale-[0.99] transition duration-200"
            >
              <Send className="w-4 h-4" />
              Send request
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default HireMeSection;