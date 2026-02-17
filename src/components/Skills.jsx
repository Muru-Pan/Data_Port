import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
    {
        title: "Programming Languages",
        skills: ["Python", "SQL", "HTML (Basic)"]
    },
    {
        title: "Data Analysis & Visualization",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "Excel", "Jupyter Notebook"]
    },
    {
        title: "Database & Querying",
        skills: ["SQL", "SQL Server Management Studio (SSMS)"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Google Colab", "Jupyter Notebook"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background-custom">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="section-heading">Technical Skills</h2>
                    <p className="text-text-dark/70 max-w-2xl">
                        A scannable overview of my technical stack and expertise in the data science lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-lg font-bold uppercase tracking-widest text-primary/60 border-b border-primary/10 pb-2">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-5 py-3 bg-white text-primary font-medium rounded-lg shadow-sm border border-gray-100 hover:border-accent hover:text-accent transition-all hover:scale-105 cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
