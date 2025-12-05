


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 border-b border-gold/10 overflow-hidden">
      
      {/* Fondo decorativo sutil (Grid o Glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blood/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="text-center z-10 max-w-4xl relative">
        
        {/* Badge de Estado: Disponible */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-900/50 bg-green-900/10 text-green-400 text-xs font-mono mb-8 tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          AVAILABLE FOR WORK
        </motion.div>
        
        {/* TU NOMBRE (Reemplaza [TU NOMBRE] con tu nombre real) */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="text-xl md:text-7xl lg:text-8xl font-serif font-bold text-bone mb-1 tracking-tight"
        >
          Escalante Facundo
        </motion.h2>

        {/* TU ROL */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="text-xl md:text-3xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold mb-8"
        >
          FULL STACK DEVELOPER
        </motion.h2>

        <motion.div 
           initial={{ width: 0 }} animate={{ width: "6rem" }} transition={{ duration: 0.8, delay: 0.4 }}
           className="h-px bg-blood mx-auto my-8 opacity-50"
        ></motion.div>

        {/* Descripción Profesional */}
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Desarrollador de software especializado en el stack <span className="text-white">MERN</span> y arquitecturas escalables.
          
        </motion.p>

        {/* Botones de Acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
           {/* Botón Principal */}
           <a href="#proyectos" className="group relative px-8 py-3 bg-blood text-white font-mono text-sm tracking-widest overflow-hidden hover:bg-[#a00000] transition-all shadow-[0_0_20px_rgba(138,0,0,0.3)] hover:shadow-[0_0_30px_rgba(138,0,0,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                VER PROYECTOS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </span>
           </a>

           {/* Botón Secundario (CV o Contacto) */}
           <a href="#contacto" className="px-8 py-3 border border-gold/30 text-gold font-mono text-sm tracking-widest hover:bg-gold/10 transition-all flex items-center gap-2">
              CONTACTAR
           </a>
        </motion.div>

        {/* Datos Técnicos Sutiles (Footer del Hero) */}
          </div>
    </section>
  );
};

export default Hero;
