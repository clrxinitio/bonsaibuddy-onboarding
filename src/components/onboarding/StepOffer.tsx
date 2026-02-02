import { Check, Zap } from "lucide-react";

interface StepOfferProps {
  onComplete: () => void;
}

const features = [
  { 
    text: "Perfect Species Identification", 
    description: "100% accurate recognition of your tree's variety and specific needs.",
    highlight: false 
  },
  { 
    text: "In-Depth Health Diagnostics", 
    description: "Instantly detect pests, diseases, or deficiencies with a single scan.",
    highlight: false 
  },
  { 
    text: "12-Month Custom Roadmap", 
    description: "A full year of guided care including precise pruning and shaping recommendations.",
    highlight: true 
  },
  { 
    text: "Unlimited Scans & Storage", 
    description: "Scan every tree in your garden with unlimited cloud history for Pro users.",
    highlight: false 
  },
  { 
    text: "Precision Watering Reminders", 
    description: "Smart alerts that adjust to your climate and tree species.",
    highlight: false 
  },
  { 
    text: "Weekly Feature Drops", 
    description: "Pro users get priority access to new tools and logic updates added every single week.",
    highlight: false,
    badge: true 
  },
];

const StepOffer = ({ onComplete }: StepOfferProps) => {
  return (
    <div className="earth-container py-4 min-h-screen flex items-center">
      <div className="flex flex-col items-center text-center max-w-2xl w-full space-y-4">
        {/* Pro Badge - Smaller */}
        <div className="animate-earth-scale opacity-0">
          <div 
            className="px-3 py-1 rounded-full"
            style={{ 
              background: 'hsl(145 90% 52% / 0.1)',
              border: '1px solid hsl(145 90% 52% / 0.3)'
            }}
          >
            <span className="text-xs font-semibold tracking-wide" style={{ color: 'hsl(145, 90%, 52%)' }}>
              BONSAIBUDDY PRO
            </span>
          </div>
        </div>

        {/* Header - Reduced size */}
        <div className="space-y-2 animate-earth-fade-in opacity-0 delay-100">
          <h2 className="earth-title text-2xl md:text-3xl lg:text-4xl">
            Never Guess <span className="neon-glow">Again</span>.
          </h2>
          <p className="earth-subtitle text-sm md:text-base max-w-md mx-auto">
            BonsaiBuddy Pro transforms your scans into a professional action plan for every tree in your collection.
          </p>
        </div>

        {/* Features Grid - 2 columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 animate-earth-slide-right opacity-0 delay-200 text-left">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                feature.highlight ? 'ring-1 ring-accent/50 md:col-span-2' : ''
              }`}
              style={{ 
                background: feature.highlight 
                  ? 'hsl(145 90% 52% / 0.08)' 
                  : 'hsl(0 0% 100% / 0.02)'
              }}
            >
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'hsl(145 90% 52% / 0.15)' }}
              >
                <Check className="w-3 h-3" style={{ color: 'hsl(145, 90%, 52%)' }} strokeWidth={3} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span 
                    className="font-medium text-xs" 
                    style={{ color: 'hsl(60, 50%, 98%)' }}
                  >
                    {feature.text}
                  </span>
                  {feature.badge && (
                    <span 
                      className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium"
                      style={{ 
                        background: 'hsl(145 90% 52% / 0.15)',
                        color: 'hsl(145, 90%, 52%)'
                      }}
                    >
                      <Zap className="w-2.5 h-2.5" />
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-[11px] mt-0.5 leading-snug" style={{ color: 'hsl(12, 8%, 55%)' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & CTA - Tighter */}
        <div className="w-full space-y-3 animate-earth-fade-in opacity-0 delay-300">
          <div className="space-y-0.5">
            <p className="text-sm font-medium" style={{ color: 'hsl(60, 50%, 98%)' }}>
              Then $29.99/year <span style={{ color: 'hsl(12, 8%, 55%)' }}>(billed annually)</span>
            </p>
            <p className="text-xs" style={{ color: 'hsl(12, 8%, 45%)' }}>
              Less than the cost of a morning coffee once a month.
            </p>
          </div>

          <button onClick={onComplete} className="earth-button-primary w-full text-base py-4 font-medium">
            Start 7-Day Free Trial
          </button>
        </div>

        {/* Trust badges + Skip - Inline */}
        <div className="w-full flex items-center justify-between animate-earth-fade-in opacity-0 delay-400">
          <div className="flex items-center gap-4" style={{ color: 'hsl(12, 8%, 50%)' }}>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[10px]">Secure Payment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[10px]">Cancel Anytime</span>
            </div>
          </div>
          <button 
            onClick={onComplete} 
            className="text-xs transition-colors hover:opacity-80"
            style={{ color: 'hsl(12, 8%, 45%)' }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOffer;
