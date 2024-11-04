// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-amber-100 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img src="../../public/tarea-completada.png" alt="logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">TimeBoxing</h1>
      </div>
      <button className="bg-brown-300 text-black font-bold px-4 py-2 rounded-lg">Cerrar sesión</button>
    </header>
  );
};

export default Header;
