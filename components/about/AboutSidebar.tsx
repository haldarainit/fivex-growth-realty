'use client';

import { motion } from 'framer-motion';

const navItems = [
  { id: 'who-we-are', label: 'Who We Are', icon: 'info' },
  { id: 'leadership', label: 'Leadership', icon: 'groups' },
  { id: 'vision', label: 'Vision', icon: 'visibility' },
  { id: 'mission', label: 'Mission', icon: 'flag' },
  { id: 'journey', label: 'Our Journey', icon: 'route' },
  { id: 'awards', label: 'Awards & Recognition', icon: 'emoji_events' },
  { id: 'developer-partners', label: 'Developer Partners', icon: 'handshake' },
  { id: 'our-team', label: 'Our Team', icon: 'people' },
  { id: 'testimonials', label: 'Testimonials', icon: 'format_quote' },
  { id: 'why-choose-us', label: 'Why Choose Us', icon: 'verified' },
  { id: 'faqs', label: 'FAQs', icon: 'help' },
];

interface AboutSidebarProps {
  activeSection: string;
}

export default function AboutSidebar({ activeSection }: AboutSidebarProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sticky Sidebar Nav */}
      <aside className="hidden lg:block sticky top-28 h-fit w-72 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <nav className="p-3 space-y-1">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-left transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-primary text-white font-bold shadow-md'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-lg flex-shrink-0 ${
                      isActive ? 'text-secondary' : 'text-gray-400 group-hover:text-secondary'
                    }`}
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm tracking-wide flex-1">{item.label}</span>
                  {isActive && (
                    <span className="material-symbols-outlined text-secondary text-base">
                      chevron_right
                    </span>
                  )}
                </motion.button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Horizontal Scroll Nav */}
      <div className="lg:hidden sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm -mx-4 sm:-mx-8 px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive ? 'bg-primary text-secondary shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
