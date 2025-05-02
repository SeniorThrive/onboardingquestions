import React, { useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { NavigationButtons } from '../components/NavigationButtons';
import { QuestionSection } from '../components/QuestionSection';
import { SectionContainer } from '../components/SectionContainer';
import { CompletionPage } from '../components/CompletionPage';
import { WelcomeScreen } from '../components/WelcomeScreen';
import { ProfileConfirmationScreen } from '../components/ProfileConfirmationScreen';
import { useQuestionnaire } from '../context/QuestionnaireContext';

export const Home = () => {
  const {
    currentStep,
    totalSteps,
    goToNextStep,
    goToPreviousStep,
    saveProgress,
    resetForm,
    isComplete,
    getCurrentSection,
    isCurrentSectionValid,
    hasStarted,
    startQuestionnaire
  } = useQuestionnaire();

  const mainRef = useRef<HTMLDivElement>(null);
  const currentSection = getCurrentSection();
  const isValid = isCurrentSectionValid();

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.offsetHeight;
      mainRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [currentStep]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main ref={mainRef} className="flex-grow bg-gray-50 pb-16 overflow-y-auto">
        {!hasStarted ? (
          <WelcomeScreen onStart={startQuestionnaire} />
        ) : currentStep === 0 ? (
          <ProfileConfirmationScreen goToNextStep={goToNextStep} />
        ) : !isComplete ? (
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
            />

            {currentSection && (
              <SectionContainer
                title={currentSection.title}
                description={currentSection.description}
              >
                <QuestionSection section={currentSection} />
              </SectionContainer>
            )}

            <NavigationButtons
              onNext={goToNextStep}
              onPrevious={goToPreviousStep}
              onSave={saveProgress}
              isFirstStep={currentStep === 1}
              isLastStep={currentStep === totalSteps}
              isValid={isValid}
              showError={!isValid}
            />
          </div>
        ) : (
          <CompletionPage onReset={resetForm} />
        )}
      </main>

      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2025 SeniorThrive. All rights reserved.</p>
          <p className="text-xs mt-1">Your security and privacy are our top priorities.</p>
        </div>
      </footer>
    </div>
  );
};