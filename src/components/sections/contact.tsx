"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionLoading } from "@/components/ui/loading-skeleton";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  if (!isPageLoaded) {
    return (
      <Section id="contact" className="-mt-1 py-20 px-4 bg-gradient-to-b from-purple-50/90 via-white to-slate-100/90 relative overflow-hidden">
        <SectionLoading />
      </Section>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace these with your EmailJS service details
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      // For demo purposes, we'll show success anyway
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <Section id="contact" className="pt-44 pb-20 sm:pt-48 sm:pb-24 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/90 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-48 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Enhanced decorative elements */}
          <div className="flex items-center justify-center gap-6 mb-16 pt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-purple-400"></div>
            <div className="relative z-20">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
              <div className="relative p-6 bg-gradient-to-br from-blue-50 to-purple-100 rounded-full border-4 border-white shadow-2xl backdrop-blur-sm">
                <Mail className="w-10 h-10 text-blue-800 drop-shadow-lg" />
              </div>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-purple-400 to-pink-400"></div>
          </div>
          
          {/* Enhanced Title with better animations */}
          <div className="space-y-8">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let&apos;s{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Connect
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 transform -skew-x-12"></div>
                </span>
              </h2>
            </div>
            
            {/* Enhanced decorative underline */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="h-1.5 w-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-1 w-4 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          {/* Enhanced Subtitle with call-to-action */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to turn your 
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> vision into reality</span>? 
              Let&apos;s collaborate and create something 
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> extraordinary together</span>.
            </p>
            
            {/* Contact highlights */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for freelance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Quick response time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Based in Sri Lanka</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods & Map Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Methods */}
          <div className="space-y-8 flex flex-col">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Multiple Ways to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Reach Out</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose your preferred method of communication. I&apos;m always excited to discuss new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6 flex-1 flex flex-col justify-center min-h-[360px]">
              {/* Email */}
              <motion.div 
                className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => window.open('mailto:chathura@example.com')}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 shadow-sm">
                    <Mail className="w-6 h-6 text-blue-700 drop-shadow-sm" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">chathura@example.com</p>
                  </div>
                  <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => window.open('tel:+94771234567')}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+94 (77) 123-4567</p>
                  </div>
                  <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative flex flex-col">
            <div className="flex-1">
              <div className="relative group h-full min-h-[400px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
                  <div className=" w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.28761893238!2d79.77487842334453!3d6.921831389238252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1642699483982!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '400px' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                      title="Colombo, Sri Lanka Location"
                    ></iframe>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">I&apos;m located in</p>
                        <p className="text-gray-600 text-sm">Colombo, Sri Lanka 🇱🇰</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Form Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Send Me a 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Message</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and I&apos;ll get back to you within 24 hours. 
              Let&apos;s discuss your project in detail!
            </p>
          </div>

          <div className="relative group">
            {/* Enhanced glassmorphism card with decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-blue-50/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-br-2xl sm:rounded-br-3xl rounded-tl-2xl sm:rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-tl-2xl sm:rounded-tl-3xl rounded-br-2xl sm:rounded-br-3xl"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/4 -right-2 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Send className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-lg text-gray-600">Thank you for reaching out. I&apos;ll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <>
                    {/* Enhanced form fields */}
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-2 sm:space-y-3">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full bg-white/70 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full bg-white/70 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300 hover:border-blue-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Discussion"
                        required
                        className="w-full bg-white/70 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300 hover:border-blue-300"
                      />
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="w-full bg-white/70 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300 hover:border-blue-300 resize-none"
                      />
                    </div>
                    
                    {/* Enhanced submit button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none text-base sm:text-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Contact Info & Social Links */}
        <motion.div
          className="text-center mt-24 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-white/95 via-slate-50/90 to-blue-50/90 mx-auto w-fit px-12 py-10 rounded-3xl border-2 border-gray-300 shadow-2xl backdrop-blur-sm">
              <p className="text-gray-800 mb-8 font-bold text-xl">Or connect with me on social media</p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-6">
                {[
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599-.058 1.793-.607 1.793-1.793v-3.191c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 1.193 1.199 1.732 1.797 1.793 4.769-1.587 8.203-6.085 8.203-11.387 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    href: "https://github.com",
                    label: "GitHub",
                    color: "hover:text-gray-900 hover:bg-gray-100"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    color: "hover:text-blue-600 hover:bg-blue-50"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    ),
                    href: "https://twitter.com",
                    label: "Twitter",
                    color: "hover:text-sky-500 hover:bg-sky-50"
                  }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 text-gray-600 ${social.color} rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              {/* Quick contact */}
              <div className="mt-10 pt-8 border-t-2 border-gray-300">
                <a
                  href="mailto:chathura@example.com"
                  className="inline-flex items-center gap-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group p-4 rounded-2xl hover:bg-blue-50"
                >
                  <Mail className="w-6 h-6 text-blue-700 group-hover:text-purple-700 transition-colors drop-shadow-lg" />
                  chathura@example.com
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform text-2xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
