import React from 'react';

interface QuestionCardProps {
  children: React.ReactNode;
  required?: boolean;
  illustration?: string;
  socialProof?: string;
}

export const QuestionCard = ({ 
  children, 
  required = false,
  illustration,
  socialProof,
}: QuestionCardProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3762D4] to-[#AE7CEC] rounded-t-lg"></div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6 transition-all duration-300 hover:shadow-md mt-2">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div>{children}</div>
            
            {socialProof && (
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700 italic">
                  {socialProof}
                </p>
              </div>
            )}
          </div>
          
          {illustration && (
            <div className="md:w-1/3">
              <img 
                src={illustration} 
                alt=""
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};