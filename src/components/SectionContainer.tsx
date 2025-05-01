import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const SectionContainer = ({ children, title, description }: SectionContainerProps) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">{title}</h2>
        {description && <p className="text-gray-600 text-lg">{description}</p>}
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};