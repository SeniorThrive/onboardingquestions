import React, { MouseEvent } from 'react';
import { Heart } from 'lucide-react';
import { useQuestionnaire } from '../context/QuestionnaireContext';

export const Header = () => {
  const { resetForm } = useQuestionnaire();
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      resetForm();
  }
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <button onClick={handleClick} className="flex items-center focus:outline-none">
            <Heart className="text-blue-600 h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold text-blue-800">SeniorThrive</h1>
        </button>
          
        <p className="ml-4 text-gray-600 hidden md:block">Your Path to Confident Living</p>
      </div>
    </header>
  );
};