
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-10">
              Have a project in mind or just want to chat about AI? Drop me a message! I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl text-blue-500 group-hover:neon-glow-blue transition-all">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm uppercase tracking-widest">Email</h4>
                  <p className="text-white font-medium">sanjay.kumar@university.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl text-purple-500 group-hover:neon-glow-purple transition-all">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm uppercase tracking-widest">Phone</h4>
                  <p className="text-white font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl text-green-500 group-hover:neon-glow-blue transition-all">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm uppercase tracking-widest">Location</h4>
                  <p className="text-white font-medium">T.S. Mishra University, Lucknow</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2rem] border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-500 text-xs uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-500 text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows={4} 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  submitted ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
