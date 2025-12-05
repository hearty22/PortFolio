import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 border-b border-gold/20 bg-void/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-gold font-serif tracking-widest text-xl border border-gold px-2 py-1 cursor-default hover:bg-gold hover:text-void transition-colors">
          DEV.INIT
        </div>
        <div className="hidden md:flex space-x-8 text-xs tracking-[0.2em] text-gray-400 font-mono">
          {['PROTOCOL', 'ARSENAL', 'CHRONICLES', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blood transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
