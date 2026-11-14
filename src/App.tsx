import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { useAppRouter } from './hooks/useAppRouter';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';

export default function App() {
  const { route, navigate } = useAppRouter();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-700">
      <Header activePage={route.page} onNavigate={navigate} />

      <main className="flex-1">
        {route.page === 'home' && <HomePage onNavigate={navigate} />}
        {route.page === 'portfolio' && <PortfolioPage onNavigate={navigate} />}
        {route.page === 'contact' && <ContactPage />}
        {route.page === 'case-study' && route.caseStudyId && (
          <CaseStudyPage caseStudyId={route.caseStudyId} onNavigate={navigate} />
        )}
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
