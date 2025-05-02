import React from 'react';

interface QuestionCardProps {
  children: React.ReactNode;
  required?: boolean;
  illustration?: string;
  isAnswered?: boolean;
  socialProof?: string;
}

export const QuestionCard = ({ 
  children, 
  required = false,
  illustration,
  isAnswered,
  socialProof,
}: QuestionCardProps) => {

  const cardStyle = `relative overflow-hidden p-6 rounded-lg shadow-sm mb-6 transition-all duration-300 hover:shadow-md mt-2 ${
    isAnswered
      ? "bg-gray-100 border-gray-300"
      : "bg-white"
  }`;

  return (
    <div className={cardStyle}>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3762D4] to-[#AE7CEC] rounded-t-lg"></div>
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
    </div>
  );
};