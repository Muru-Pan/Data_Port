import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingCTA = () => {
    return (
        <a
            href="#contact"
            className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-full shadow-2xl hover:bg-accent/90 hover:scale-105 transition-all outline-none"
        >
            <MessageSquare size={20} />
            <span>Hire Me</span>
        </a>
    );
};

export default FloatingCTA;
