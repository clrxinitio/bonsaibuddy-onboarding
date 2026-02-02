import { Check, Sparkles, Bell, Leaf } from "lucide-react";
interface StepOfferProps {
  onComplete: () => void;
}
const features = [{
  icon: Sparkles,
  text: "Unlimited AI health reports"
}, {
  icon: Bell,
  text: "Seasonal care alerts"
}, {
  icon: Leaf,
  text: "Personalized watering schedules"
}];
const StepOffer = ({
  onComplete
}: StepOfferProps) => {
  return <div className="zen-container bg-secondary-foreground">
      <div className="flex flex-col items-center text-center max-w-md space-y-10">
        {/* Badge */}
        <div className="animate-zen-scale opacity-0">
          <div className="px-4 py-2 rounded-full bg-zen-gold/20 border border-zen-gold/30">
            <span className="text-sm font-medium text-zen-bark">🎉 Special Offer</span>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4 animate-zen-fade-in opacity-0 delay-100">
          <h2 className="zen-title text-3xl md:text-4xl">
            7 Days of <span className="text-primary">Mastery</span>.
          </h2>
          <p className="zen-subtitle">
            Experience the full power of AI-guided bonsai care, completely free.
          </p>
        </div>

        {/* Features Card */}
        <div className="w-full zen-card space-y-4 animate-zen-slide-up opacity-0 delay-200">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-foreground">{feature.text}</span>
                <Check className="w-5 h-5 text-primary ml-auto" />
              </div>;
        })}
        </div>

        {/* Pricing */}
        <div className="space-y-2 animate-zen-fade-in opacity-0 delay-300">
          <p className="text-sm text-muted-foreground">Then $9.99/month. Cancel anytime.</p>
        </div>

        {/* CTA */}
        <div className="w-full space-y-4 animate-zen-fade-in opacity-0 delay-400">
          <button onClick={onComplete} className="zen-button-primary w-full text-lg py-5">
            Start Free Trial
          </button>
          
          <button onClick={onComplete} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Maybe later
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 pt-4 animate-zen-fade-in opacity-0 delay-500">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>;
};
export default StepOffer;