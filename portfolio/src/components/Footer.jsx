import React from 'react';
import { Send, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="py-20 px-6 border-t border-gold/20 bg-void text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif text-white mb-2"></h2>
        <p className="text-gray-500 font-mono text-sm mb-8">¿Necesitas hablar conmigo?</p>

        <a href="mailto:tuemail@ejemplo.com" className="inline-flex items-center gap-2 px-8 py-4 bg-blood text-white font-mono font-bold tracking-widest hover:bg-[#a00000] transition-all mb-12">
          <Send size={16} /> CONTACTO
        </a>

        <div className="flex justify-center gap-8 text-gold font-mono text-sm">
          <a href="https://github.com/hearty22" className="hover:text-white transition-colors flex items-center gap-2 uppercase"><ExternalLink size={14} /> GitHub</a>
          <a href="https://www.linkedin.com/in/facundo-escalante-00b616338/" className="hover:text-white transition-colors flex items-center gap-2 uppercase"><ExternalLink size={14} /> LinkedIn</a>
          
        </div>

        <div className="mt-16 text-xs text-gray-700 font-mono">
          <p>© 2025 // SYSTEM.EXIT(0)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
