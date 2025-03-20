// src/components/Loader.jsx
import React from 'react';

const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    <p className="mt-4 text-lg text-gray-600">Loading...</p>
  </div>
);

export default Loader;