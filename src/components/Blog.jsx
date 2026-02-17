import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: "Understanding Customer Segmentation with K-Means",
        date: "Feb 10, 2026",
        readTime: "5 min read",
        excerpt: "A deep dive into how unsupervised learning can unlock hidden patterns in your customer data...",
        category: "Data Analysis Tips",
        image: "https://cdn.pixabay.com/photo/2016/11/23/14/37/chart-1853262_1280.jpg"
    },
    {
        title: "Top 5 Python Libraries for Data Visualization in 2026",
        date: "Jan 25, 2026",
        readTime: "8 min read",
        excerpt: "Beyond Matplotlib: Exploring modern visualization tools that make your dashboards pop...",
        category: "Python for Beginners",
        image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="section-heading">Insights & Articles</h2>
                        <p className="text-text-dark/70 max-w-2xl">
                            I write about data science, python, and analytics to share knowledge and help others grow.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col h-full bg-background-custom rounded-xl overflow-hidden group border border-gray-100"
                        >
                            {/* Blog Image */}
                            <div className="h-48 overflow-hidden bg-primary/10 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-accent/40 font-bold p-12 text-center text-sm uppercase tracking-widest">
                                    [ {post.category} ]
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-tighter mb-4">
                                    <span>{post.category}</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-text-dark/60 text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-4 text-xs text-text-dark/50">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/btn">
                                        Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
