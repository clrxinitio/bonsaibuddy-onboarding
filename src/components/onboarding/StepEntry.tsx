import { Leaf } from "lucide-react";

interface StepEntryProps {
  onNext: () => void;
}

const StepEntry = ({ onNext }: StepEntryProps) => {
  return (
    <div className="earth-container">
      <div className="flex flex-col items-center text-center max-w-md space-y-12">
        {/* Logo with neon glow */}
        <div className="animate-earth-fade-in opacity-0">
          <div className="w-24 h-24 rounded-full flex items-center justify-center animate-neon-pulse"
               style={{ 
                 background: 'hsl(145 90% 52% / 0.1)',
                 boxShadow: '0 0 30px hsl(145 90% 52% / 0.3)'
               }}>
            <Leaf className="w-12 h-12" style={{ color: 'hsl(145, 90%, 52%)' }} strokeWidth={1.5} />
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-4 animate-earth-fade-in opacity-0 delay-200">
          <h1 className="earth-title text-5xl md:text-6xl">BonsaiBuddy</h1>
          <p className="earth-tagline">Patience, practiced.</p>
        </div>

        {/* CTA */}
        <div className="animate-earth-fade-in opacity-0 delay-400 pt-8">
          <button onClick={onNext} className="earth-button-primary text-lg">
            Begin Your Journey
          </button>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-earth-fade-in opacity-0 delay-600">
          <div className="flex items-center gap-2" style={{ color: 'hsl(12, 8%, 35%)' }}>
            <div className="w-8 h-px" style={{ background: 'hsl(0 0% 100% / 0.1)' }} />
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-8 h-px" style={{ background: 'hsl(0 0% 100% / 0.1)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepEntry;
