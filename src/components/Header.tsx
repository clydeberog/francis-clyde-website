import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AppRoute, PageKey } from '../types/portfolio';

interface HeaderProps {
  activePage: PageKey;
  onNavigate: (route: AppRoute, sectionAnchor?: string) => void;
}

const NAV_ITEMS: Array<{ label: string; page: Exclude<PageKey, 'case-study'> }> = [
  { label: 'Home', page: 'home' },
  { label: 'Portfolio', page: 'portfolio' },
  { label: 'Contact', page: 'contact' },
];

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page: Exclude<PageKey, 'case-study'>, sectionAnchor?: string) => {
    setMobileOpen(false);
    onNavigate({ page }, sectionAnchor);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-8 px-6">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="inline-flex cursor-pointer shrink-0 items-center gap-2.5 whitespace-nowrap text-lg font-bold tracking-tight text-[#0b1f3a]"
        >
          <img
            src="/assets/aistudio/francis_f9878096.png"
            alt="Francis Clyde logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full border border-slate-200 bg-white object-cover"
            referrerPolicy="no-referrer"
          />
          <span>Francis Clyde</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive =
              activePage === item.page ||
              (activePage === 'case-study' && item.page === 'portfolio');

            return (
              <button
                key={item.page}
                type="button"
                onClick={() => handleNavClick(item.page)}
                className={`relative cursor-pointer shrink-0 whitespace-nowrap py-1.5 text-[15px] font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-[#0b1f3a] after:scale-x-100'
                    : 'text-slate-600 hover:text-[#0b1f3a] after:scale-x-0 hover:after:scale-x-100'
                } after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-emerald-600 after:transition-transform after:duration-200`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() =>
              handleNavClick('contact', activePage === 'contact' ? 'contact-page-form' : undefined)
            }
            className="hidden min-h-[40px] cursor-pointer shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-[#0b1f3a] px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:bg-[#132d52] md:inline-flex"
          >
            Start a Project
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0b1f3a] md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                activePage === item.page ||
                (activePage === 'case-study' && item.page === 'portfolio');
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavClick(item.page)}
                  className={`flex min-h-[44px] cursor-pointer items-center rounded-lg px-3 py-2 text-left text-[15px] font-medium ${
                    isActive
                      ? 'bg-slate-100 text-[#0b1f3a]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() =>
                handleNavClick(
                  'contact',
                  activePage === 'contact' ? 'contact-page-form' : undefined
                )
              }
              className="mt-2 flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg bg-[#0b1f3a] px-5 py-2.5 text-[15px] font-semibold text-white"
            >
              Let&apos;s Build Together
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
