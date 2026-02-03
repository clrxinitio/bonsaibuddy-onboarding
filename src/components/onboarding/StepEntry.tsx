import bonsaiLogo from "@/assets/bonsai-logo.svg";

interface StepEntryProps {
  onNext: () => void;
}

const StepEntry = ({ onNext }: StepEntryProps) => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col px-6 py-8"
      style={{ background: 'hsl(12, 10%, 10%)' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-12">
        {/* Logo with neon glow */}
        <div className="animate-earth-fade-in opacity-0">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center animate-neon-pulse"
            style={{ 
              background: 'hsl(145 90% 52% / 0.1)',
              boxShadow: '0 0 30px hsl(145 90% 52% / 0.3)'
            }}
          >
            <img 
              src={bonsaiLogo} 
              alt="BonsaiBuddy Logo" 
              className="w-14 h-14"
              style={{ 
                filter: 'brightness(0) saturate(100%) invert(75%) sepia(60%) saturate(500%) hue-rotate(90deg) brightness(110%) drop-shadow(0 0 10px hsl(145 90% 52% / 0.8))'
              }}
            />
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-4 animate-earth-fade-in opacity-0 delay-200">
          <h1 className="earth-title text-5xl md:text-6xl">BonsaiBuddy</h1>
          <p className="earth-tagline">Patience, practiced.</p>
        </div>
      </div>

      {/* CTA - Fixed at bottom */}
      <div className="w-full max-w-md mx-auto animate-earth-fade-in opacity-0 delay-400 pb-4">
        <button onClick={onNext} className="earth-button-primary w-full text-base py-4 font-medium">
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

export default StepEntry;
