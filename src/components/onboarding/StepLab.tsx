import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

interface StepLabProps {
  onNext: () => void;
}

const loadingSteps = [
  "Analyzing your preferences...",
  "Consulting seasonal data...",
  "Designing care rituals...",
  "Preparing your garden plan...",
];

const StepLab = ({ onNext }: StepLabProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 30);

    // Step text animation
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) return prev;
        return prev + 1;
      });
    }, 750);

    // Auto-advance after 3 seconds
    const autoAdvance = setTimeout(() => {
      onNext();
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(autoAdvance);
    };
  }, [onNext]);

  return (
    <div className="zen-container">
      <div className="flex flex-col items-center text-center max-w-md space-y-12">
        {/* Zen Animation */}
        <div className="relative w-40 h-40">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-zen-breathe" />
          
          {/* Middle ring */}
          <div 
            className="absolute inset-4 rounded-full border-2 border-primary/30 animate-zen-breathe"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Inner ring */}
          <div 
            className="absolute inset-8 rounded-full border-2 border-primary/40 animate-zen-breathe"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-zen-float">
              <Leaf className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="76"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray={`${progress * 4.77} 477`}
              className="transition-all duration-100"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <p className="zen-tagline">The Lab</p>
          <h2 className="zen-title text-2xl md:text-3xl">
            Creating your garden plan...
          </h2>
          <p className="text-muted-foreground h-6 transition-all duration-300">
            {loadingSteps[currentStep]}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepLab;
