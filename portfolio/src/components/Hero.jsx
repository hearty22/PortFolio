import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 border-b border-gold/10">
      {/* Decoración Técnica Izquierda */}
      <div className="absolute top-1/4 left-10 text-gold/30 font-mono text-xs flex flex-col gap-2 hidden md:flex">
        <span>COORDS: 26.18° S, 58.17° W</span>
        <span>LOC: FORMOSA, ARG</span>
        <span>SYS: ARCH_LINUX // HYPRLAND</span>
      </div>
      
      <div className="text-center z-10 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-blood font-mono tracking-[0.5em] text-sm mb-4 font-bold uppercase"
        >
          System Online // Multiplatform Dev
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-serif font-bold text-bone mb-6 leading-tight relative"
        >
          <span className="relative inline-block">
            FULL STACK
            <span className="absolute -top-4 -right-6 text-gold text-2xl animate-pulse">✦</span>
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-bone to-gray-600">
            DEVELOPER
          </span>
        </motion.h1>

        <motion.div 
           initial={{ width: 0 }} animate={{ width: "8rem" }} transition={{ duration: 1, delay: 0.5 }}
           className="h-px bg-gold mx-auto my-8"
        ></motion.div>

        <p className="text-gray-400 font-mono max-w-2xl mx-auto leading-relaxed font-light">
          Especialista en MERN y entornos Linux personalizados. 
          Forjado en la disciplina de <span className="text-gold">Arch Linux</span>. 
          Transformo el caos de los datos en arquitecturas elegantes.
        </p>

        <div className="mt-12">
           <button className="group relative px-8 py-3 bg-transparent border border-gold text-gold font-mono hover:bg-blood hover:border-blood hover:text-white transition-all duration-300 uppercase tracking-widest text-xs">
              <span className="relative z-10">Explorar Sistema</span>
              <div className="absolute inset-0 bg-blood transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0"></div>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
