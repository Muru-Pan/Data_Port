import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
    {
        degree: "Master of Science in Data Science",
        institution: "Kalasalingam University",
        location: "Virudhnagar, Tamil Nadu",
        duration: "Sep 2023 – Apr 2025",
        description: "Focus on Advanced Machine Learning, Statistical Modeling, and Big Data Analytics."
    },
    {
        degree: "Bachelor of Computer Science",
        institution: "Bishop Heber College",
        location: "Trichy, India",
        duration: "Sep 2020 – Apr 2023",
        description: "Strong foundation in Computer Science fundamentals, logic, and programming."
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="section-heading">Academic Foundation</h2>
                    <p className="text-text-dark/70 max-w-2xl">
                        My educational background provides the theoretical and technical foundation for my data science career.
                    </p>
                </div>

                <div className="relative border-l-2 border-accent/20 ml-4 md:ml-6 space-y-12 pb-8">
                    {education.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative pl-10"
                        >
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-white shadow-sm ring-4 ring-accent/10"></div>

                            <div className="bg-background-custom p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{item.degree}</h3>
                                        <div className="flex items-center gap-2 text-accent font-semibold">
                                            <GraduationCap size={18} />
                                            <span>{item.institution}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm text-text-dark/60 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{item.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-text-dark/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
