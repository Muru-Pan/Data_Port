import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, BarChart, Code, Search } from 'lucide-react';

const projects = [
    {
        title: "Customer Segmentation & Pricing Strategy",
        date: "Dec 2024 – Apr 2025",
        problem: "Identifying key customer profiles and optimizing pricing based on historical data.",
        tags: ["Python", "Pandas", "NumPy", "Clustering", "EDA"],
        outcome: "Improved conversion rates by 15% through personalized pricing and targeted marketing segments.",
        icon: <Database className="text-accent" />
    },
    {
        title: "Restaurant Recommendation System",
        date: "Sep – Oct 2023",
        problem: "Helping users find restaurants based on location intelligence and preference analysis.",
        tags: ["Market Analysis", "Location Intelligence", "Decision Support", "Python"],
        outcome: "Built a decision support tool that accurately matches user preferences with regional popularity trends.",
        icon: <Search className="text-accent" />
    },
    {
        title: "EDA & Dashboard Creation",
        date: "Aug 2025",
        problem: "Lack of visibility into complex business datasets for non-technical stakeholders.",
        tags: ["Power BI", "Tableau", "Data Storytelling", "SQL"],
        outcome: "Developed interactive dashboards that reduced reporting time by 60% and enabled real-time monitoring.",
        icon: <BarChart className="text-accent" />
    },
    {
        title: "NLP Text Rewriting System",
        date: "Sep – Oct 2024",
        problem: "Generating high-quality, readable paraphrases for content diversification.",
        tags: ["NLP", "Python", "Transformers", "Text Processing"],
        outcome: "Implemented a paraphrasing engine using pre-trained models with human-level quality scores.",
        icon: <Code className="text-accent" />
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="section-heading">Featured Projects</h2>
                    <p className="text-text-dark/70 max-w-2xl">
                        Real-world data solutions that bridge the gap between complex algorithms and business value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-background-custom p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                                    {project.icon}
                                </div>
                                <span className="text-xs font-semibold text-text-dark/40 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-gray-100">
                                    {project.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>

                            <div className="mb-6 h-12 overflow-hidden">
                                <p className="text-text-dark/70 text-sm leading-relaxed">
                                    {project.problem}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white text-accent rounded-sm border border-accent/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-bold text-primary">Insight:</span>
                                    <span className="text-text-dark/80 italic">{project.outcome}</span>
                                </div>
                            </div>

                            <button className="mt-8 flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase group/btn">
                                View Details <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
