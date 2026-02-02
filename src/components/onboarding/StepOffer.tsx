import { Check, Sparkles, Bell, Leaf } from "lucide-react";

interface StepOfferProps {
  onComplete: () => void;
}

const features = [
  { icon: Sparkles, text: "Unlimited AI health reports" },
  { icon: Bell, text: "Seasonal care alerts" },
  { icon: Leaf, text: "Personalized watering schedules" },
];

const StepOffer = ({ onComplete }: StepOfferProps) => {
  return (
    <div className="earth-container">
      <div className="flex flex-col items-center text-center max-w-md space-y-10">
        {/* Badge */}
        <div className="animate-earth-scale opacity-0">
          <div 
            className="px-4 py-2 rounded-full"
            style={{ 
              background: 'hsl(45 80% 50% / 0.1)',
              border: '1px solid hsl(45 80% 50% / 0.3)'
            }}
          >
            <span className="text-sm font-medium" style={{ color: 'hsl(45, 80%, 60%)' }}>🎉 Special Offer</span>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4 animate-earth-fade-in opacity-0 delay-100">
          <h2 className="earth-title text-3xl md:text-4xl">
            7 Days of <span className="neon-glow">Mastery</span>.
          </h2>
          <p className="earth-subtitle">
            Experience the full power of AI-guided bonsai care, completely free.
          </p>
        </div>

        {/* Features Card */}
        <div className="w-full earth-card space-y-4 animate-earth-slide-right opacity-0 delay-200">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-4 p-3 rounded-lg"
                style={{ background: 'hsl(0 0% 100% / 0.03)' }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ 
                    background: 'hsl(145 90% 52% / 0.1)',
                    boxShadow: '0 0 10px hsl(145 90% 52% / 0.2)'
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'hsl(145, 90%, 52%)' }} strokeWidth={1.5} />
                </div>
                <span className="font-medium" style={{ color: 'hsl(60, 50%, 98%)' }}>{feature.text}</span>
                <Check className="w-5 h-5 ml-auto" style={{ color: 'hsl(145, 90%, 52%)' }} />
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <div className="space-y-2 animate-earth-fade-in opacity-0 delay-300">
          <p className="text-sm" style={{ color: 'hsl(12, 8%, 55%)' }}>Then $9.99/month. Cancel anytime.</p>
        </div>

        {/* CTA */}
        <div className="w-full space-y-4 animate-earth-fade-in opacity-0 delay-400">
          <button onClick={onComplete} className="earth-button-primary w-full text-lg py-5">
            Start Free Trial
          </button>
          
          <button 
            onClick={onComplete} 
            className="text-sm transition-colors"
            style={{ color: 'hsl(12, 8%, 55%)' }}
          >
            Maybe later
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 pt-4 animate-earth-fade-in opacity-0 delay-500">
          <div className="flex items-center gap-2" style={{ color: 'hsl(12, 8%, 55%)' }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: 'hsl(12, 8%, 55%)' }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOffer;
