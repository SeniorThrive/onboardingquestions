import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface CompletionPageProps {
  onReset: () => void;
}

export const CompletionPage = ({ onReset }: CompletionPageProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-10 px-4">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-20 w-20 text-green-500" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Thank You!
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <p className="text-xl text-gray-700 mb-6">
          Your SeniorThrive journey begins now! We've received your information and 
          are creating personalized recommendations tailored to you and your home.
        </p>
        
        <p className="text-lg text-gray-600 mb-6">
          You'll receive an email shortly with your account details and next steps.
        </p>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-xl font-medium text-gray-800 mb-4">What happens next?</h3>
          
          <ul className="text-left space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">1.</span>
              <span className="text-gray-700">
                Our team will review your questionnaire responses
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">2.</span>
              <span className="text-gray-700">
                We'll prepare your personalized home safety assessment
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">3.</span>
              <span className="text-gray-700">
                You'll receive your customized recommendations within 2 business days
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <Button 
        variant="primary" 
        onClick={onReset}
        className="px-8"
      >
        Return to Home
      </Button>
    </div>
  );
};