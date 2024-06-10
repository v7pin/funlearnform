import React from 'react';

const SiteUnderMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center p-4 text-white">
      <div className="relative">
        <div className="text-8xl mb-4 animate-bounce">🚧</div>
        <h1 className="text-5xl font-extrabold mb-2 ">Site Under Maintenance</h1>
        <p className="text-lg mb-4  bg-opacity-20 p-2 ">
          Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience.
        </p>
        
        <p className="text-md text-gray-300 mt-4">
          &copy; 2024 Kshitiksha Foundation
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="text-[20rem] animate-pulse">⚠️</div>
      </div>
    </div>
  );
};

export default SiteUnderMaintenance;
