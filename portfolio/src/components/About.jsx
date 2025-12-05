
import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

const About = () => {
  return (
    <section id="protocol" className="py-24 px-6 relative bg-[#080808] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center relative z-10">
        
        {/* --- COLUMNA IZQUIERDA: TEXTO (Ocupa 3/5 del espacio) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3 border-l-2 border-blood pl-8 relative"
        >
          {/* Decoración pequeña */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blood rounded-full blur-[2px] animate-pulse"></div>
          
          <h2 className="text-4xl font-serif text-bone mb-6 tracking-wide">
            THE <span className="text-blood">OPERATOR</span>
          </h2>
          
          <div className="text-gray-400 mb-8 leading-relaxed font-mono text-sm md:text-base space-y-6">
            {/* Usando la Opción 1 (Técnica) */}
            <p>
              Más allá del código, busco el control total. Como usuario nativo de <span className="text-gold">Arch Linux</span>, 
              entiendo que la eficiencia no es una opción, es una necesidad. Mi flujo de trabajo en Hyprland refleja mi filosofía: 
              minimalismo visual y máxima funcionalidad.
            </p>
            <p>
              Actualmente cursando la carrera de Desarrollo de Software, fusiono la precisión matemática 
              con la flexibilidad del <span className="text-bone font-bold">Stack MERN</span>. 
              No solo construyo aplicaciones; diseño arquitecturas que resisten el caos.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-xs text-gold">
            <span className="border border-gold/30 px-3 py-1">FORMOSA, ARG</span>
            <span className="border border-gold/30 px-3 py-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              STATUS: ACTIVE
            </span>
          </div>
        </motion.div>

        {/* --- COLUMNA DERECHA: FOTO (Ocupa 2/5 del espacio) --- */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="lg:col-span-2 relative group"
        >
          {/* El Marco Dorado Exterior */}
          <div className="border border-gold p-3 relative bg-surface/50 backdrop-blur-sm">
            {/* Esquinas decorativas "Tech" */}
            <Crosshair className="absolute -top-2 -left-2 text-gold w-6 h-6" strokeWidth={1} />
            <Crosshair className="absolute -bottom-2 -right-2 text-gold w-6 h-6" strokeWidth={1} />

            {/* Contenedor de la Imagen con efecto de recorte */}
            <div className="relative overflow-hidden aspect-[4/5] border border-[#333] group-hover:border-blood/50 transition-colors duration-500">
              
              {/* Capa de tinte rojo/oscuro sobre la foto */}
              <div className="absolute inset-0 bg-blood/20 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500"></div>
              {/* Capa de escaneo (scanline) sutil */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 z-20 pointer-events-none"></div>

              {/* LA FOTO REAL */}
              {/* Asegúrate de que tu foto esté en public/profile.jpg */}
              <img 
                src="/profile.jpg" 
                alt="Profile picture of the developer" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 transform group-hover:scale-105"
              />
            </div>

            {/* Etiquetas técnicas debajo de la foto */}
            <div className="mt-3 flex justify-between text-[10px] font-mono text-gray-500 tracking-widest">
              <span>SUBJECT_ID: DEV_001</span>
              <span className="text-gold">/// CLASSIFIED</span>
            </div>
          </div>
          
          {/* Sombra de resplandor rojo detrás del marco */}
          <div className="absolute inset-0 bg-blood blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
