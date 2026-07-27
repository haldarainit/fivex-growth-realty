'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactMapHero from '@/components/contact/ContactMapHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactSidebar from '@/components/contact/ContactSidebar';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 flex-grow">
        <ContactMapHero />
        <section className="max-w-container-max mx-auto px-4 sm:px-8 lg:px-margin-desktop py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <ContactForm />
            <ContactSidebar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
