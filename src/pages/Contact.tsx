import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Have questions? We're here to help. Reach out to us via phone, email, or visit our campus.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Campus Reach</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Phone</h4>
                  <div className="flex flex-col text-slate-600 text-base">
                    <a href="tel:8824351992" className="hover:text-blue-600 transition-colors">8824351992</a>
                    <a href="tel:9799707879" className="hover:text-blue-600 transition-colors">9799707879</a>
                  </div>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="p-3 bg-indigo-100 rounded-xl w-fit mb-6">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Email</h4>
                  <a href="mailto:laxmindharpoly@gmail.com" className="text-slate-600 text-base hover:text-blue-600 transition-colors">
                    laxmindharpoly@gmail.com
                  </a>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="p-3 bg-amber-100 rounded-xl w-fit mb-6">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Address</h4>
                  <p className="text-slate-600 text-base leading-relaxed">
                    IN-3, M.I.A., RIICO (Near Tarni Cancer Hospital), Alwar-301030 (Raj.)
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="p-3 bg-green-100 rounded-xl w-fit mb-6">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Working Hours</h4>
                  <p className="text-slate-600 text-base">Mon - Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 bg-slate-100 rounded-[3rem] overflow-hidden relative border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">
                Google Maps Integration
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.467406943807!2d76.6853!3d27.5447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972900000000000%3A0x0!2zMjfCsDMyJzQwLjkiTiA3NsKwNDEnMDcuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                <p className="text-slate-500">Thank you for reaching out. Our team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-base font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-base font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-slate-700 ml-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 88243 51992"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-slate-700 ml-1">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none text-lg">
                    <option>Admission Inquiry</option>
                    <option>Academic Query</option>
                    <option>Placement Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none text-lg"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
