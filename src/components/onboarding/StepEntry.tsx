interface StepEntryProps {
  onNext: () => void;
}

const BonsaiIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    className={className}
    style={style}
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Pot */}
    <path d="M16 40h16M18 44h12M17 40l1 4M31 40l-1 4" />
    {/* Trunk */}
    <path d="M24 40V28M24 28c-2-3-6-4-6-4M24 28c2-3 6-4 6-4" />
    {/* Foliage clouds */}
    <ellipse cx="24" cy="12" rx="10" ry="6" />
    <ellipse cx="16" cy="18" rx="6" ry="4" />
    <ellipse cx="32" cy="18" rx="6" ry="4" />
    <ellipse cx="20" cy="22" rx="5" ry="3" />
    <ellipse cx="28" cy="22" rx="5" ry="3" />
  </svg>
);

const StepEntry = ({ onNext }: StepEntryProps) => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col px-6 py-8"
      style={{ background: 'hsl(12, 10%, 10%)' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-12">
        {/* Logo with neon glow */}
        <div className="animate-earth-fade-in opacity-0">
          <div className="w-24 h-24 rounded-full flex items-center justify-center animate-neon-pulse"
               style={{ 
                 background: 'hsl(145 90% 52% / 0.1)',
                 boxShadow: '0 0 30px hsl(145 90% 52% / 0.3)'
               }}>
            <BonsaiIcon className="w-12 h-12" style={{ color: 'hsl(145, 90%, 52%)' }} />
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
