import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Terms & Conditions | FIVEX Growth Realty',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        <div className="bg-primary py-10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <h1 className="font-display font-bold text-3xl text-white">Terms & Conditions</h1>
            <p className="text-white/50 text-sm mt-2">Last updated: January 1, 2026</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 space-y-8 text-gray-600">
          {[
            { title: '1. Acceptance of Terms', text: 'By accessing the FIVEX Growth Realty website and using our services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.' },
            { title: '2. Services', text: 'FIVEX Growth Realty provides real estate brokerage, advisory, and related services. We act as intermediaries between buyers/investors and real estate developers. All property transactions are subject to applicable laws including RERA.' },
            { title: '3. Accuracy of Information', text: 'Property pricing, availability, and specifications listed on our website are indicative and subject to change without notice. All prices are subject to developer terms. Please verify with our advisors before making any decisions.' },
            { title: '4. RERA Compliance', text: 'FIVEX Growth Realty operates as a registered real estate agent under RERA in Uttar Pradesh, Haryana, and Maharashtra. Our registration numbers are available on the Contact page. We only recommend RERA-registered projects.' },
            { title: '5. Limitation of Liability', text: 'FIVEX serves as an advisory intermediary. We are not liable for developer delays, construction quality issues, or post-sale disputes between clients and developers. All representations made by developers are their own responsibility.' },
            { title: '6. Intellectual Property', text: 'All content on this website, including text, images, and branding, is the property of FIVEX Growth Realty. Reproduction without written consent is prohibited.' },
            { title: '7. Contact', text: 'For legal inquiries, contact us at legal@fivexgrowthrealty.com.' },
          ].map(({ title, text }) => (
            <section key={title}>
              <h2 className="font-display font-bold text-primary text-xl mb-3">{title}</h2>
              <p className="text-sm leading-relaxed">{text}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
