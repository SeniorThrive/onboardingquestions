import React, { createContext, useContext, useState, useEffect } from 'react';
import { FormData, FormSection, initialFormData } from '../data/formData';

interface QuestionnaireContextType {
  formData: FormData;
  updateFormData: (sectionId: string, fieldId: string, value: any) => void;
  currentStep: number;
  totalSteps: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  saveProgress: () => void;
  resetForm: () => void;
  isComplete: boolean;
  setComplete: (value: boolean) => void;
  getCurrentSection: () => FormSection | null;
  isCurrentSectionValid: () => boolean;
  updateOtherValue: (sectionId: string, fieldId: string, value: string) => void;
  updateConditionalField: (sectionId: string, fieldId: string, optionValue: string, value: string) => void;
  hasStarted: boolean;
  startQuestionnaire: () => void;
}

const QuestionnaireContext = createContext<QuestionnaireContextType | undefined>(undefined);

export const QuestionnaireProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem('seniorThriveFormData');
    return savedData ? JSON.parse(savedData) : initialFormData;
  });
  
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = localStorage.getItem('seniorThriveCurrentStep');
    return savedStep ? parseInt(savedStep, 10) : 1;
  });
  
  const [isComplete, setComplete] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(() => {
    return localStorage.getItem('seniorThriveStarted') === 'true';
  });
  
  const totalSteps = Object.keys(formData).length;
  
  useEffect(() => {
    localStorage.setItem('seniorThriveCurrentStep', currentStep.toString());
  }, [currentStep]);
  
  const startQuestionnaire = () => {
    setHasStarted(true);
    localStorage.setItem('seniorThriveStarted', 'true');
  };
  
  const updateFormData = (sectionId: string, fieldId: string, value: any) => {
    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [sectionId]: {
          ...prevData[sectionId],
          fields: {
            ...prevData[sectionId].fields,
            [fieldId]: {
              ...prevData[sectionId].fields[fieldId],
              value
            }
          }
        }
      };
      
      localStorage.setItem('seniorThriveFormData', JSON.stringify(updatedData));
      
      return updatedData;
    });
  };
  
  const updateConditionalField = (sectionId: string, fieldId: string, optionValue: string, value: string) => {
    setFormData(prevData => {
      const field = prevData[sectionId].fields[fieldId];
      const updatedOptions = field.options?.map(option => 
        option.value === optionValue
          ? {
              ...option,
              conditionalField: {
                ...option.conditionalField,
                value
              }
            }
          : option
      );

      const updatedData = {
        ...prevData,
        [sectionId]: {
          ...prevData[sectionId],
          fields: {
            ...prevData[sectionId].fields,
            [fieldId]: {
              ...prevData[sectionId].fields[fieldId],
              options: updatedOptions
            }
          }
        }
      };
      
      localStorage.setItem('seniorThriveFormData', JSON.stringify(updatedData));
      
      return updatedData;
    });
  };
  
  const updateOtherValue = (sectionId: string, fieldId: string, value: string) => {
    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [sectionId]: {
          ...prevData[sectionId],
          fields: {
            ...prevData[sectionId].fields,
            [fieldId]: {
              ...prevData[sectionId].fields[fieldId],
              otherValue: value
            }
          }
        }
      };
      
      localStorage.setItem('seniorThriveFormData', JSON.stringify(updatedData));
      
      return updatedData;
    });
  };
  
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      setComplete(true);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };
  
  const saveProgress = () => {
    localStorage.setItem('seniorThriveFormData', JSON.stringify(formData));
    localStorage.setItem('seniorThriveCurrentStep', currentStep.toString());
    alert('Your progress has been saved! You can return later to complete the questionnaire.');
  };
  
  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setComplete(false);
    setHasStarted(false);
    localStorage.removeItem('seniorThriveFormData');
    localStorage.removeItem('seniorThriveCurrentStep');
    localStorage.removeItem('seniorThriveStarted');
  };
  
  const getCurrentSection = (): FormSection | null => {
    const sectionIds = Object.keys(formData);
    if (currentStep <= sectionIds.length) {
      const currentSectionId = sectionIds[currentStep - 1];
      return formData[currentSectionId];
    }
    return null;
  };
  
  const isCurrentSectionValid = (): boolean => {
    const currentSection = getCurrentSection();
    if (!currentSection) return false;
    
    const fields = currentSection.fields;
    
    for (const fieldId in fields) {
      const field = fields[fieldId];
      if (field.required) {
        if (field.type === 'text' && !field.value) {
          return false;
        } else if (field.type === 'radio' && !field.value) {
          return false;
        } else if (field.type === 'checkbox' && Array.isArray(field.value) && field.value.length === 0) {
          return false;
        }
      }
    }
    
    return true;
  };
  
  return (
    <QuestionnaireContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        totalSteps,
        goToNextStep,
        goToPreviousStep,
        saveProgress,
        resetForm,
        isComplete,
        setComplete,
        getCurrentSection,
        isCurrentSectionValid,
        updateOtherValue,
        updateConditionalField,
        hasStarted,
        startQuestionnaire,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = () => {
  const context = useContext(QuestionnaireContext);
  if (context === undefined) {
    throw new Error('useQuestionnaire must be used within a QuestionnaireProvider');
  }
  return context;
};