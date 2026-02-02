import { useEffect, useState } from "react";

interface StepProofProps {
  onNext: () => void;
}

const StepProof = ({ onNext }: StepProofProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const bars = [
    { label: "Jan", height: 25, success: false },
    { label: "Feb", height: 35, success: false },
    { label: "Mar", height: 45, success: false },
    { label: "Apr", height: 60, success: true },
    { label: "May", height: 75, success: true },
    { label: "Jun", height: 85, success: true },
    { label: "Jul", height: 95, success: true },
  ];

  return (
    <div className="zen-container">
      <div className="flex flex-col items-center text-center max-w-lg space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-zen-fade-in opacity-0">
          <p className="zen-tagline">The Proof</p>
          <h2 className="zen-title text-3xl md:text-4xl">
            Join the <span className="text-primary">95%</span>.
          </h2>
          <p className="zen-subtitle max-w-sm">
            AI-guided care eliminates the guesswork that leads to loss.
          </p>
        </div>

        {/* Animated Chart */}
        <div className="w-full zen-card animate-zen-scale opacity-0 delay-300">
          <div className="flex items-end justify-between gap-2 h-48 px-4">
            {bars.map((bar, index) => (
              <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className={`w-full rounded-t-lg transition-all duration-1000 ease-out ${
                    bar.success ? 'bg-primary' : 'bg-muted'
                  }`}
                  style={{ 
                    height: animated ? `${bar.height}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                />
                <span className="text-xs text-muted-foreground">{bar.label}</span>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-muted" />
              <span className="text-xs text-muted-foreground">Without AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-primary" />
              <span className="text-xs text-muted-foreground">With BonsaiBuddy</span>
            </div>
          </div>
        </div>

        {/* Continue */}
        <div className="animate-zen-fade-in opacity-0 delay-500 pt-4">
          <button onClick={onNext} className="zen-button-primary">
            See How It Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepProof;
