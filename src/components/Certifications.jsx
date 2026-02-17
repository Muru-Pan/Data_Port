import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
    {
        title: "Conference Paper Presentation",
        event: "2nd International Conference on Recent Trends in Data Science (IRDTS 2024)",
        institution: "St. Xavier's College",
        date: "October 2024",
        description: "Presented research findings on data science application at a prestigious international forum."
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-background-custom">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="section-heading">Certifications & Recognition</h2>
                    <p className="text-text-dark/70 max-w-2xl">
                        Professional validation and academic contributions to the field of data science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-accent/10"></div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-accent/10 text-accent rounded-full">
                                    <Award size={24} />
                                </div>
                                <div className="text-xs font-bold text-accent uppercase tracking-tighter bg-accent/5 px-2 py-1 rounded">
                                    Academic Achievement
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 pr-4">{cert.title}</h3>
                            <p className="text-sm font-semibold text-primary/70 mb-4">{cert.event}</p>

                            <p className="text-text-dark/60 text-sm leading-relaxed mb-6">
                                {cert.description}
                            </p>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-100 italic text-xs text-text-dark/40 font-medium">
                                <span>{cert.institution}</span>
                                <span>{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Placeholder for future certs */}
                    <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-center items-center justify-center p-8 text-text-dark/20 text-center flex-col min-h-[250px]">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold">+</span>
                        </div>
                        <p className="text-sm font-medium">New Certifications<br />Coming Soon</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
