import React from 'react';
import { Github, Loader2, Lock } from 'lucide-react'; // Importamos nuevos iconos

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 relative bg-gradient-to-b from-void to-[#110000]">
             {/* --- FONDO CON BLUR Y OSCURIDAD --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. La Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://i.pinimg.com/736x/c4/4f/21/c44f21f9b90a48400468a94b6ff60fc6.jpg')",
            filter: "blur(5px) brightness(0.3)" /* Aquí controlas el desenfoque y la oscuridad */
          }}
        ></div>
        
        {/* 2. Capa extra de color negro para asegurar legibilidad (opcional pero recomendado) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-white relative z-10 mb-20 pl-6 border-l-4 border-blood">
          Mis <span className="italic text-gold">Proyectos</span>
        </h2>

        {/* --- PROYECTO 1: GENKI (El Principal) --- */}
        <div className="group relative grid md:grid-cols-2 gap-8 items-center mb-24">
          
          {/* Imagen del Proyecto */}
          <div className="order-2 md:order-1 relative h-64 bg-[#111] border border-[#333] overflow-hidden flex items-center justify-center group-hover:border-blood transition-colors duration-500">
             <div className="absolute inset-0 opacity-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
             {/* IMAGEN DE WHATSAPP: Asegúrate de que el nombre sea exacto al archivo en la carpeta public */}
             <img 
                src="/WhatsApp Image 2025-12-05 at 3.09.18 PM.jpeg" 
                alt="genki_ui" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
             />
          </div>

          {/* Info del Proyecto */}
          <div className="order-1 md:order-2 space-y-4">
            <h3 className="text-4xl font-serif font-bold group-hover:text-blood transition-colors text-bone">GENKI!</h3>

            <div className="flex items-center gap-2 text-blood font-mono text-xs tracking-widest">
               <span>01</span><span className="h-px w-10 bg-blood"></span><span>SYSTEM ARCHITECTURE</span>
            </div>
            
            <h3 className="text-2xl text-white font-serif">Plataforma de Gestión Docente</h3>
            
            <p className="text-gray-400 text-sm leading-relaxed font-mono">
              Solución lógica al caos administrativo. Sistema diseñado para docentes que necesitan optimizar tiempos, asistencia y calificaciones.
            </p>
            
            <div className="flex flex-wrap gap-2 text-xs font-mono text-gold mb-6">
              <span className="border border-gold/30 px-2 py-1">HTML5, CSS, JS</span>
              <span className="border border-gold/30 px-2 py-1">NODE.JS</span>
              <span className="border border-gold/30 px-2 py-1">MONGODB</span>
            </div>

            {/* BOTÓN DE GITHUB */}
            <div className="pt-2">
              <a 
                href="LINK_DE_TU_REPO_AQUI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 border border-gold/40 text-gold font-mono text-xs tracking-wider hover:bg-gold hover:text-void transition-all duration-300"
              >
                <Github size={16} />
                VER CÓDIGO
              </a>
            </div>
          </div>
        </div>

        {/* --- SLOT DE "EN DESARROLLO" (Para llenar el vacío con estilo) --- */}
        <div className="group relative grid md:grid-cols-2 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
          
          {/* Columna de Texto */}
          <div className="space-y-4 order-1">
            <div className="flex items-center gap-2 text-gray-500 font-mono text-xs tracking-widest">
               <span>02</span><span className="h-px w-10 bg-gray-700"></span><span>WORK IN PROGRESS</span>
            </div>
            <h3 className="text-2xl text-gray-300 font-serif">En Desarrollo</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-mono">
              Actualmente cocinando nuevas soluciones Full Stack. Experimentando con arquitecturas de microservicios y optimización de rendimiento en Linux.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-600">
              <span className="border border-gray-800 px-2 py-1 bg-[#0a0a0a]">RESEARCH</span>
              <span className="border border-gray-800 px-2 py-1 bg-[#0a0a0a]">BUILDING</span>
            </div>
          </div>

          {/* Columna Visual (Placeholder Técnico) */}
          <div className="order-2 relative h-48 border border-dashed border-[#333] bg-[#050505] flex flex-col items-center justify-center group-hover:border-gold/30 transition-colors">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             
             {/* Animación de carga */}
             <Loader2 className="text-blood w-10 h-10 animate-spin mb-4" />
             
             <div className="flex items-center gap-2 text-xs font-mono text-gold/70 tracking-widest">
                <Lock size={12} />
                <span>COMPILING_RESOURCES...</span>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
