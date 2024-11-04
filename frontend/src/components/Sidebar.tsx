// src/components/Sidebar.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <div>
        <h2 className="text-center font-bold">Prioridades</h2>
        <div className="bg-gray-200 h-48 mt-2 rounded-md"></div>
      </div>
      <div>
        <h2 className="text-center font-bold">Brain Dump</h2>
        <div className="bg-gray-200 h-48 mt-2 rounded-md"></div>
      </div>
    </div>
  );
};

export default Sidebar;
