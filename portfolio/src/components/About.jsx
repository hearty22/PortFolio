
import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

const About = () => {
  return (
    <section id="sobre mi"  className="py-24 px-6 relative bg-[#080808] overflow-hidden">
       {/* --- FONDO CON BLUR Y OSCURIDAD --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. La Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://i.pinimg.com/1200x/b0/52/8e/b0528e0b70e29a5efbafcc267869e4d6.jpg')",
            filter: "blur(2px) brightness(0.3)" /* Aquí controlas el desenfoque y la oscuridad */
          }}
        ></div>
        
        {/* 2. Capa extra de color negro para asegurar legibilidad (opcional pero recomendado) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
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
            <span className="text-blood">Sobre mi:</span>
          </h2>
          
          <div className="text-gray-400 mb-8 leading-relaxed font-mono text-sm md:text-base space-y-6">
            {/* Usando la Opción 1 (Técnica) */}
            <p>
              Soy un Desarrollador <span className="text-gold">Full Stack</span>, enfocado en una sola cosa: resolver problemas reales a través del código. Por ahora cuento con pocos proyectos, uno de ellos es una herramienta enfocada en la ayuda a docentes, "GENKI!", contando con herramientas centralizadas a las tareas de un docente
            </p>
            <p>
              Me muevo con fluidez entre el Frontend y el Backend. Utilizo <span className="text-bone font-bold">React</span> para construit interfaces reactivas y modernas, y <span className="text-bone font-bold">Node.js</span> para asegurar que los datos fluyan de manera segura y eficiente. Cuento con conocimientos y experiencia en metodologias agiles para un mejor desempeño en equipo con otros desarrolladores

            </p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-xs text-gold">
            <span className="border border-gold/30 px-3 py-1">FORMOSA, ARG</span>
            <span className="border border-gold/30 px-3 py-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
              Edad: 19
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
                src="/public/profile.jpg" 
                alt="Profile picture of the developer" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 transform group-hover:scale-105"
              />
            </div>

            {/* Etiquetas técnicas debajo de la foto */}
            <div className="mt-3 flex justify-between text-[10px] font-mono text-gray-500 tracking-widest">
              <span>SUBJECT_ID: DEV_001</span>
              
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
