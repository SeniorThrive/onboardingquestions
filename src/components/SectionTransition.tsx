import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SectionTransitionProps {
  message: string;
}

export const SectionTransition = ({ message }: SectionTransitionProps) => {
  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100 animate-fadeIn">
      <div className="flex items-center space-x-4">
        <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
        <p className="text-lg text-blue-800">{message}</p>
      </div>
    </div>
  );
};