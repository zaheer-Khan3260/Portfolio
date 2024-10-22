import React from 'react';

const CustomShape = ({ children }) => {
  return (
    <div className="relative max-w-4xl mx-auto h-14">
      <div 
        className="absolute inset-0 bg-slate-400 bg-opacity-60"
        style={{
          clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 30px 100%)'
        }}
      ></div>
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};

export default CustomShape;