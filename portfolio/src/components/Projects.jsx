import React from 'react';

const Projects = () => {
  return (
    <section id="chronicles" className="py-24 px-6 relative bg-gradient-to-b from-void to-[#110000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-white relative z-10 mb-20 pl-6 border-l-4 border-blood">
          THE <span className="italic text-gold">CHRONICLES</span>
        </h2>

        {/* Proyecto 1 */}
        <div className="group relative grid md:grid-cols-2 gap-8 items-center mb-24">
          <div className="order-2 md:order-1 relative h-64 bg-[#111] border border-[#333] overflow-hidden flex items-center justify-center group-hover:border-blood transition-colors duration-500">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <h3 className="text-4xl font-serif font-bold text-[#333] group-hover:text-blood transition-colors">TOMERU!</h3>
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <div className="flex items-center gap-2 text-blood font-mono text-xs tracking-widest">
               <span>01</span><span className="h-px w-10 bg-blood"></span><span>SYSTEM ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl text-white font-serif">Plataforma de Gestión Docente</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-mono">
              Solución lógica al caos administrativo. Sistema diseñado para docentes que necesitan optimizar tiempos.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gold">
              <span className="border border-gold/30 px-2 py-1">REACT</span>
              <span className="border border-gold/30 px-2 py-1">NODE.JS</span>
            </div>
          </div>
        </div>

         {/* Proyecto 2 */}
         <div className="group relative grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blood font-mono text-xs tracking-widest">
               <span>02</span><span className="h-px w-10 bg-blood"></span><span>DATA ANALYSIS</span>
            </div>
            <h3 className="text-2xl text-white font-serif">StreamFlix Case Study</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-mono">
              Análisis estratégico de mercado para plataformas de streaming. UX Research y métricas.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gold">
              <span className="border border-gold/30 px-2 py-1">MARKET DATA</span>
              <span className="border border-gold/30 px-2 py-1">UX</span>
            </div>
          </div>
          <div className="relative h-64 bg-[#111] border border-[#333] overflow-hidden flex items-center justify-center group-hover:border-gold transition-colors duration-500">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
             <h3 className="text-4xl font-serif font-bold text-[#333] group-hover:text-gold transition-colors">STREAMFLIX</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
