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
    <div 
      className="min-h-screen w-full flex flex-col px-6 py-8"
      style={{ background: 'hsl(12, 10%, 10%)' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-12">
        {/* Neon Animation */}
        <div className="relative w-44 h-44">
          {/* Spinning ring */}
          <svg className="absolute inset-0 w-full h-full animate-ring-spin" viewBox="0 0 176 176">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 90%, 52%)" stopOpacity="1" />
                <stop offset="50%" stopColor="hsl(145, 90%, 52%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(145, 90%, 52%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="88"
              cy="88"
              r="82"
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Static outer ring */}
          <div 
            className="absolute inset-2 rounded-full"
            style={{ border: '1px solid hsl(145 90% 52% / 0.2)' }}
          />
          
          {/* Pulsing middle ring */}
          <div 
            className="absolute inset-6 rounded-full animate-neon-glow"
            style={{ border: '1px solid hsl(145 90% 52% / 0.3)' }}
          />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center animate-neon-pulse"
              style={{ 
                background: 'hsl(145 90% 52% / 0.1)',
                boxShadow: '0 0 30px hsl(145 90% 52% / 0.4)'
              }}
            >
              <Leaf 
                className="w-10 h-10" 
                style={{ color: 'hsl(145, 90%, 52%)' }} 
                strokeWidth={1.5} 
              />
            </div>
          </div>

          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 176 176">
            <circle
              cx="88"
              cy="88"
              r="76"
              fill="none"
              stroke="hsl(0 0% 100% / 0.05)"
              strokeWidth="2"
            />
            <circle
              cx="88"
              cy="88"
              r="76"
              fill="none"
              stroke="hsl(145, 90%, 52%)"
              strokeWidth="2"
              strokeDasharray={`${progress * 4.77} 477`}
              strokeLinecap="round"
              className="transition-all duration-100"
              style={{ filter: 'drop-shadow(0 0 4px hsl(145 90% 52% / 0.6))' }}
            />
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <p className="earth-tagline">The Lab</p>
          <h2 className="earth-title text-2xl md:text-3xl">
            Creating your garden plan...
          </h2>
          <p className="h-6 transition-all duration-300" style={{ color: 'hsl(12, 8%, 55%)' }}>
            {loadingSteps[currentStep]}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs">
          <div className="h-1 rounded-full overflow-hidden" style={{ background: 'hsl(0 0% 100% / 0.08)' }}>
            <div 
              className="h-full rounded-full transition-all duration-100"
              style={{ 
                width: `${progress}%`,
                background: 'hsl(145, 90%, 52%)',
                boxShadow: '0 0 10px hsl(145 90% 52% / 0.6)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepLab;
