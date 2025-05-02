import React from 'react';
import { Button } from './Button';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  onSave: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isValid: boolean;
  showError: boolean;
}

export const NavigationButtons = ({
  onNext,
  onPrevious,
  onSave,
  isFirstStep,
  isLastStep,
  isValid,
  showError
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between mt-8">
      <div>
        {!isFirstStep && (
          <Button variant="outline" onClick={onPrevious} className="flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>
        )}
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Button 
          variant="outline" 
          onClick={onSave}
          className="flex items-center md:inline-flex"
        >
          <Save className="mr-2 h-5 w-5" />
          <span className="hidden md:inline">Save for Later</span>
          <span className="md:hidden">Save</span>
        </Button>
        
        {!isLastStep ? (
          <Button 
            variant="primary" 
            onClick={onNext} 
            disabled={!isValid}
            className="flex items-center"
          >
            <span>Next</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : (
          <Button 
            variant="secondary" 
            onClick={onNext} 
            disabled={!isValid}
            className="flex items-center"
          >
            <span>Complete</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
      {showError && <p className="text-red-500 mt-2">Please answer all required questions to proceed.</p>}
    </div>
  );
};