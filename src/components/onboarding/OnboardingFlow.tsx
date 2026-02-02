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
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextStep = useCallback(() => {
    setDirection('right');
    setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS - 1));
  }, []);

  const handleComplete = () => {
    console.log("Onboarding complete!");
    setCurrentStep(0);
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
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'hsl(12, 10%, 10%)' }}
    >
      {/* Progress indicator */}
      {currentStep > 0 && currentStep < 6 && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i < currentStep ? '24px' : i === currentStep ? '24px' : '8px',
                  height: '4px',
                  background: i < currentStep 
                    ? 'hsl(145, 90%, 52%)' 
                    : i === currentStep 
                      ? 'hsl(145, 90%, 52%, 0.5)' 
                      : 'hsl(0 0% 100% / 0.1)',
                  boxShadow: i < currentStep ? '0 0 8px hsl(145 90% 52% / 0.5)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Step content with horizontal slide transition */}
      <div 
        key={currentStep}
        className="animate-earth-slide-right"
        style={{ animationDuration: '0.5s' }}
      >
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingFlow;
