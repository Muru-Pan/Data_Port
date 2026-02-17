import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[100vh] flex items-center justify-center bg-primary overflow-hidden pt-20"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-3/5 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-accent mb-4 tracking-wide">
                            Data Scientist & Analyst
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Muruga Pandian
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/80 max-w-2xl"
                    >
                        "Turning Raw Data into Business Decisions"
                        <br />
                        I help businesses uncover insights, build predictive models, and create interactive dashboards that drive growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-sm transition-all shadow-lg hover:shadow-accent/40"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-sm transition-all"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-2/5 flex justify-center"
                >
                    {/* Profile Image Container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-accent/40 animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                            <img
                                src={profileImg}
                                alt="Muruga Pandian"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
