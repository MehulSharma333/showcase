"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
     try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error sending message: " + result.error);
      }
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 glow-text">
            {`Let's`} <span className=" bg-clip-text ">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Have a project in mind? {`Let's`} discuss how we can bring your ideas to life
            with cutting-edge frontend development.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-morphism p-8 rounded-xl hover:glow-purple transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 glow-text">Get in Touch</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                {`I'm always open to discussing new opportunities, collaborations, 
                or just having a chat about the latest web technologies.`}
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "mehul21dws@gmail.com", href: "mailto:mehul21dws@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 8580609295", href: "tel:+918580609295" },
                  { icon: MapPin, label: "Location", value: "Mandi , Himachal Pradesh" ,  href: "#" },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 glass-morphism rounded-lg hover:glow-purple transition-all duration-300 group"
                  >
                    <contact.icon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-morphism p-8 rounded-xl hover:glow-purple transition-all duration-300">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/MehulSharma333", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/mehul-sharma-999571248/", label: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 glass-morphism rounded-full hover:glow-purple hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-morphism p-8 rounded-xl hover:glow-purple transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-morphism rounded-lg focus:glow-purple focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-morphism rounded-lg focus:glow-purple focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-morphism rounded-lg focus:glow-purple focus:outline-none transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-morphism rounded-lg focus:glow-purple focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-green-600 text-white'
                    : isSubmitting
                      ? 'bg-purple-600/50 cursor-not-allowed'
                      : 'gradient-purple hover:glow-purple hover:scale-105'
                }`}
              >
                {submitted ? (
                  "Message Sent!"
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            Ready to <span className=" bg-clip-text ">Start?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {`Let's build something amazing together`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mehul21dws@gmail.com"
            target="_blank"
             rel="noopener noreferrer"
              className="px-8 py-4 gradient-purple rounded-full font-semibold hover:scale-105 transform transition-all duration-300 glow-purple"
            >
              Email Me
            </a>
            <a
              href="/Mehul_CV_Main.pdf"
               download="Mehul_Sharma_CV.pdf"
              className="px-8 py-4 glass-morphism rounded-full font-semibold hover:scale-105 transform transition-all duration-300 hover:glow-purple"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}