import { ToolLogoId } from '../types/portfolio';

interface ToolLogoProps {
  id: ToolLogoId;
}

export function ToolLogo({ id }: ToolLogoProps) {
  switch (id) {
    case 'semrush':
      return (
        <img
          src="/assets/aistudio/Semrush-Symbol_36a93e88.png"
          alt="SEMrush logo"
          className="h-6 w-6 object-contain"
          referrerPolicy="no-referrer"
        />
      );
    case 'screaming-frog':
      return (
        <img
          src="/assets/aistudio/OIP__1__573a0985.webp"
          alt="Screaming Frog logo"
          className="h-6 w-6 object-contain"
          referrerPolicy="no-referrer"
        />
      );
    case 'hubspot':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M17.4 8.7V6.1a1.8 1.8 0 1 0-1.6 0v2.6a4.8 4.8 0 0 0-2.4 1.1L7.3 5.9a2.1 2.1 0 1 0-.9 1.4l6 3.8a4.7 4.7 0 0 0-.3 1.7 4.7 4.7 0 0 0 .5 2.1l-2.1 2.1a1.7 1.7 0 1 0 1.2 1.2l2.1-2.1a4.7 4.7 0 1 0 3.6-7.4zm-.8 7a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z"
            fill="#FF7A59"
          />
        </svg>
      );
    case 'ahrefs':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#2E5BFF" />
          <path
            d="M12.2 7.2c-2.3 0-4 1.2-4.4 3h2.3c.3-.7 1-1.1 2-1.1 1.2 0 1.9.6 1.9 1.6v.5l-2.4.2c-2.5.2-4 1.3-4 3.2 0 1.8 1.4 3 3.4 3 1.4 0 2.5-.6 3.1-1.5v1.2h2.2v-6.5c0-2.3-1.5-3.6-4.1-3.6zm1.8 6.4c0 1.2-1 2.1-2.4 2.1-1 0-1.7-.5-1.7-1.3 0-.8.7-1.3 2-1.4l2.1-.2v.8z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'local-dominator':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#0B1F3A" />
          <path
            d="M12 6.2a4.3 4.3 0 0 0-4.3 4.3c0 3.1 4.3 7.3 4.3 7.3s4.3-4.2 4.3-7.3A4.3 4.3 0 0 0 12 6.2z"
            fill="#059669"
          />
          <circle cx="12" cy="10.4" r="1.6" fill="#FFFFFF" />
        </svg>
      );
    case 'gsc':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="12" width="3.5" height="8" rx="1" fill="#34A853" />
          <rect x="8.5" y="8" width="3.5" height="12" rx="1" fill="#4285F4" />
          <rect x="14" y="10" width="3.5" height="10" rx="1" fill="#FBBC05" />
          <circle cx="16.5" cy="7.5" r="3.2" stroke="#EA4335" strokeWidth="2" fill="#FFFFFF" />
          <path d="M19 10l2.2 2.2" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'ga4':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="15.5" y="4" width="4.2" height="16" rx="2.1" fill="#F9AB00" />
          <rect x="9.9" y="10" width="4.2" height="10" rx="2.1" fill="#E37400" />
          <circle cx="6.4" cy="17.9" r="2.2" fill="#E37400" />
        </svg>
      );
    case 'google-ads':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.2 17.5 10.4 6.6a2 2 0 0 1 3.5 2L7.7 19.5a2 2 0 0 1-3.5-2z" fill="#FBBC05" />
          <path d="M13.6 6.6l6.2 10.9a2 2 0 1 1-3.5 2L10.1 8.6a2 2 0 0 1 3.5-2z" fill="#4285F4" />
          <circle cx="6" cy="18.3" r="2.1" fill="#34A853" />
        </svg>
      );
    case 'clarity':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="10.5" cy="12" r="6.5" fill="#0078D4" />
          <circle cx="14.5" cy="12" r="5.5" fill="#50E6FF" fillOpacity="0.88" />
          <circle cx="10.5" cy="12" r="2.4" fill="#FFFFFF" />
        </svg>
      );
  }
}
