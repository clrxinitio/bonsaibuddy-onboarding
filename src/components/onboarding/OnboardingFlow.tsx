import { useState, useCallback } from "react";
import StepEntry from "./StepEntry";
import StepIntent from "./StepIntent";
import StepProof from "./StepProof";
import StepRitual from "./StepRitual";
import StepLab from "./StepLab";
import StepIdentity from "./StepIdentity";
import StepOffer from "./StepOffer";

const TOTAL_STEPS = 7;

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS - 1));
  }, []);

  const handleComplete = () => {
    // In a real app, this would navigate to the main app
    console.log("Onboarding complete!");
    setCurrentStep(0); // Reset for demo
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepEntry onNext={nextStep} />;
      case 1:
        return <StepIntent onNext={nextStep} />;
      case 2:
        return <StepProof onNext={nextStep} />;
      case 3:
        return <StepRitual onNext={nextStep} />;
      case 4:
        return <StepLab onNext={nextStep} />;
      case 5:
        return <StepIdentity onNext={nextStep} />;
      case 6:
        return <StepOffer onComplete={handleComplete} />;
      default:
        return <StepEntry onNext={nextStep} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Progress indicator */}
      {currentStep > 0 && currentStep < 6 && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i < currentStep 
                    ? 'w-6 bg-primary' 
                    : i === currentStep 
                      ? 'w-6 bg-primary/50' 
                      : 'w-2 bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Step content with transition */}
      <div 
        key={currentStep}
        className="animate-zen-fade-in"
      >
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingFlow;
