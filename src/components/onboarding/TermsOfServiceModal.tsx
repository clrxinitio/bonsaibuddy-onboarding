import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsOfServiceModalProps {
  children: React.ReactNode;
}

const TermsOfServiceModal = ({ children }: TermsOfServiceModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent 
        className="max-w-lg max-h-[80vh] p-0"
        style={{ background: 'hsl(12, 10%, 12%)' }}
      >
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle 
            className="text-xl font-serif"
            style={{ color: 'hsl(60, 20%, 98%)' }}
          >
            Terms of Service
          </DialogTitle>
          <p className="text-xs" style={{ color: 'hsl(12, 8%, 45%)' }}>
            Last Updated: January 2026
          </p>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] px-6 pb-6">
          <div 
            className="space-y-6 text-sm leading-relaxed"
            style={{ color: 'hsl(12, 8%, 65%)' }}
          >
            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                1. ACCEPTANCE OF TERMS
              </h3>
              <p>By accessing and using BonsaiBuddy ("the App"), you accept and agree to be bound by the terms and provisions of this agreement.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                2. USE LICENSE
              </h3>
              <p>Permission is granted to temporarily download one copy of the App for personal, non-commercial transitory viewing only.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                3. USER ACCOUNTS
              </h3>
              <p>You are responsible for safeguarding the password that you use to access the App and for any activities or actions under your password.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                4. SUBSCRIPTION SERVICES
              </h3>
              <p>Some features of the App are available only through a paid subscription. Payment will be charged to your App Store or Google Play account. Subscriptions automatically renew unless cancelled.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                5. PRIVACY
              </h3>
              <p>Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the App.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                6. PROHIBITED USES
              </h3>
              <p>You may not use the App:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>For any unlawful purpose</li>
                <li>To solicit others to perform unlawful acts</li>
                <li>To violate any regulations, rules, laws</li>
                <li>To infringe upon intellectual property rights</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                7. DISCLAIMER
              </h3>
              <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                8. LIMITATION OF LIABILITY
              </h3>
              <p>In no event shall BonsaiBuddy be liable for any indirect, incidental, special, consequential or punitive damages.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                9. CHANGES TO TERMS
              </h3>
              <p>We reserve the right to modify these terms at any time. Continued use of the App following modifications constitutes acceptance.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                10. CONTACT US
              </h3>
              <p>Questions about the Terms of Service should be sent to us at <a href="mailto:support@bonsaibuddy.app" style={{ color: 'hsl(145, 90%, 52%)' }}>support@bonsaibuddy.app</a></p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;
