// src/components/Schedule.tsx
import React from 'react';

const Schedule = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center font-bold mb-2">Fecha</h2>
      <div className="flex">
        <div className="bg-gray-200 flex flex-col text-center p-2">
          {["7", "8", "9", "10", "11", "12", "13"].map((hour) => (
            <div key={hour} className="p-2 text-gray-800">{hour}</div>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex">
            <div className="bg-gray-300 w-1/2 p-2 text-center font-bold">:00</div>
            <div className="bg-gray-300 w-1/2 p-2 text-center font-bold">:30</div>
          </div>
          <div className="bg-gray-200 h-96"></div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
