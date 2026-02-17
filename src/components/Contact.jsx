import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Mock EmailJS integration for now
        // In a real scenario, the user would replace these keys
        /*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              setSuccess(true);
              setLoading(false);
              formRef.current.reset();
          }, (error) => {
              setError(true);
              setLoading(false);
          });
        */

        // Simulated success for demo
        setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            formRef.current.reset();
            setTimeout(() => setSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="section-heading text-white after:bg-accent mb-8">Get In Touch</h2>
                        <p className="text-white/70 mb-12 max-w-md text-lg leading-relaxed">
                            Have a data project or looking for a consultant? Let's discuss how I can help you turn your raw data into actionable business decisions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-accent/20 text-accent rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Me</p>
                                    <a href="mailto:murugapandian723@gmail.com" className="text-xl font-bold hover:text-accent transition-colors">
                                        murugapandian723@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a href="https://linkedin.com/in/muruga-pandian" target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-accent text-white rounded-full transition-all hover:-translate-y-1">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/muruga-pandian" target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-accent text-white rounded-full transition-all hover:-translate-y-1">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-12 text-text-dark shadow-2xl relative overflow-hidden">
                        {success && (
                            <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                                <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-text-dark/60">Thank you for reaching out. I'll get back to you shortly.</p>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-dark/40">Your Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="Muruga Pandian"
                                        className="w-full px-5 py-4 bg-background-custom border border-transparent focus:border-accent rounded-lg outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-dark/40">Email Address</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="example@mail.com"
                                        className="w-full px-5 py-4 bg-background-custom border border-transparent focus:border-accent rounded-lg outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-dark/40">Project Type</label>
                                <select
                                    required
                                    name="project_type"
                                    className="w-full px-5 py-4 bg-background-custom border border-transparent focus:border-accent rounded-lg outline-none transition-all appearance-none"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="Data Analysis">Data Analysis</option>
                                    <option value="Dashboard/Visualization">Dashboard/Visualization</option>
                                    <option value="NLP/Text Processing">NLP/Text Processing</option>
                                    <option value="Recommendation System">Recommendation System</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-dark/40">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project needs..."
                                    className="w-full px-5 py-4 bg-background-custom border border-transparent focus:border-accent rounded-lg outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg shadow-lg hover:shadow-accent/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                            >
                                {loading ? "Sending..." : (
                                    <>
                                        <span>Start A Project</span>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {/* Privacy Note */}
                            <p className="text-[10px] text-center text-text-dark/30 uppercase tracking-widest pt-4">
                                Your data is secure and will never be shared with third parties.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
