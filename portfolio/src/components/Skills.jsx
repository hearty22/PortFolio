import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code, Server, Shield, Layers } from 'lucide-react';

const skillsData = [
  { title: "React.js", icon: <Code />, level: "Frontend Core", desc: "Component Architecture" },
  { title: "Node.js", icon: <Server />, level: "Backend Logic", desc: "RESTful APIs / Express" },
  { title: "MongoDB", icon: <Database />, level: "Data Persistence", desc: "Schema Design" },
  { title: "Linux", icon: <Terminal />, level: "Environment", desc: "Server management, Scripting, etc" },
  { title: "Pentesting", icon: <Shield />, level: "Security Basics", desc: "Nmap, Gobuster, JackTheRipper, etc" },
  { title: "mySQL", icon: <Database />, level: "Data Persistence", desc: "Relational Databases" },

];

const Skills = () => {
  return (
    <section id="tecnologias" className="py-24 px-6 border-y border-gold/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-blood flex-1 opacity-40"></div>
          <h2 className="text-3xl font-serif tracking-widest text-bone"><span className="text-gold">TECNOLOGIAS</span></h2>
          <div className="h-px bg-blood flex-1 opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-surface border border-[#222] p-6 hover:border-blood transition-colors duration-300 font-mono"
            >
              <div className="text-gold mb-4 group-hover:text-blood transition-colors">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-xs text-gold uppercase tracking-wider mb-2">{skill.level}</p>
              <p className="text-gray-500 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
