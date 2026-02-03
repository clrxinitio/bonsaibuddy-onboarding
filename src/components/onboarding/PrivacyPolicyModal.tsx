import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  children: React.ReactNode;
}

const PrivacyPolicyModal = ({ children }: PrivacyPolicyModalProps) => {
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
            Privacy Policy
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
            <p>
              BonsaiBuddy ("we", "our", or "us") is committed to protecting your privacy.
            </p>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                1. INFORMATION WE COLLECT
              </h3>
              <p><strong>Personal Information:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Account information (email, name)</li>
                <li>Device information</li>
                <li>Usage data and analytics</li>
                <li>Photos you choose to scan (processed locally when possible)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                2. HOW WE USE YOUR INFORMATION
              </h3>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Provide and maintain our service</li>
                <li>Notify you about changes to our service</li>
                <li>Provide customer support</li>
                <li>Monitor usage and improve the App</li>
                <li>Detect and prevent technical issues</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                3. DATA SHARING & AI PROCESSING
              </h3>
              <p>We do not sell your personal information. We share data with trusted partners strictly to provide our service:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>OpenAI:</strong> When you scan a tree, your photo is sent to OpenAI's API (GPT-4o) for botanical analysis. This data is used only to generate your report and is not used for any other purpose.</li>
                <li><strong>Supabase:</strong> We use Supabase for secure data storage and account management.</li>
                <li><strong>Legal Authorities:</strong> Only if required by law to comply with legal obligations.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                4. YOUR PRIVACY RIGHTS
              </h3>
              <p>Under GDPR, CCPA/CPRA, and other privacy laws, you have rights to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of data selling/sharing</li>
                <li>Data portability (download your data)</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                5. CALIFORNIA RESIDENTS (CCPA/CPRA)
              </h3>
              <p>California residents have additional rights:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale/sharing of personal information</li>
                <li>Right to non-discrimination</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                6. DATA RETENTION
              </h3>
              <p>We retain your data only as long as necessary for the purposes set out in this policy.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                7. CHILDREN'S PRIVACY
              </h3>
              <p>We do not knowingly collect data from children under 13. If you believe we have collected data from a child, please contact us.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                8. DATA SECURITY
              </h3>
              <p>We implement appropriate security measures to protect your personal information.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                9. INTERNATIONAL TRANSFERS
              </h3>
              <p>Your information may be transferred to and processed in countries outside your jurisdiction.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                10. CHANGES TO THIS POLICY
              </h3>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold" style={{ color: 'hsl(60, 20%, 98%)' }}>
                11. CONTACT US
              </h3>
              <p>For privacy-related inquiries: <a href="mailto:privacy@bonsaibuddy.app" style={{ color: 'hsl(145, 90%, 52%)' }}>privacy@bonsaibuddy.app</a></p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
