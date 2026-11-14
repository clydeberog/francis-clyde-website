import { useCallback, useEffect, useState } from 'react';
import { AppRoute, CaseStudyId } from '../types/portfolio';

const CASE_STUDY_IDS: ReadonlySet<string> = new Set<CaseStudyId>([
  'wr-builders',
  'three-stones',
  'new-life-church',
  'keyword-research-tool',
]);

function parseRouteFromLocation(): AppRoute {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const hash = window.location.hash.toLowerCase();

  if (pathname.startsWith('/case-studies/')) {
    const slug = pathname.replace('/case-studies/', '');
    if (CASE_STUDY_IDS.has(slug)) {
      return { page: 'case-study', caseStudyId: slug as CaseStudyId };
    }
  }

  if (pathname === '/portfolio' || hash === '#portfolio') {
    return { page: 'portfolio' };
  }

  if (pathname === '/contact' || hash === '#contact') {
    return { page: 'contact' };
  }

  if (hash.startsWith('#case-studies/')) {
    const slug = hash.replace('#case-studies/', '');
    if (CASE_STUDY_IDS.has(slug)) {
      return { page: 'case-study', caseStudyId: slug as CaseStudyId };
    }
  }

  return { page: 'home' };
}

function routeToPath(route: AppRoute): string {
  if (route.page === 'case-study' && route.caseStudyId) {
    return `/case-studies/${route.caseStudyId}`;
  }
  if (route.page === 'portfolio') return '/portfolio';
  if (route.page === 'contact') return '/contact';
  return '/';
}

export function useAppRouter() {
  const [route, setRoute] = useState<AppRoute>(() => parseRouteFromLocation());

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(parseRouteFromLocation());
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const navigate = useCallback((nextRoute: AppRoute, sectionAnchor?: string) => {
    const targetPath = routeToPath(nextRoute);
    try {
      if (window.location.pathname !== targetPath || window.location.hash) {
        window.history.pushState(null, '', targetPath);
      }
    } catch {
      // Ignore history pushState restriction in sandboxed environments
    }

    setRoute(nextRoute);

    if (sectionAnchor) {
      window.setTimeout(() => {
        const el = document.getElementById(sectionAnchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return { route, navigate };
}
