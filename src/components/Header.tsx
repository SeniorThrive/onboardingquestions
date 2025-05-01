import React from 'react';
import { Heart } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center">
          <Heart className="text-blue-600 h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold text-blue-800">SeniorThrive</h1>
        </div>
        <p className="ml-4 text-gray-600 hidden md:block">Your Path to Confident Living</p>
      </div>
    </header>
  );
};