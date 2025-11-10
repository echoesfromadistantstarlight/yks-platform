import { useState, useCallback, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  // URL hash'den veya localStorage'dan başlangıç sayfasını belirle
  const getInitialPage = () => {
    // Önce URL hash'e bak
    const hash = window.location.hash.replace('#', '');
    if (hash === 'dashboard') return 'dashboard';
    
    // Hash yoksa localStorage'a bak
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage === 'dashboard') return 'dashboard';
    
    // Hiçbiri yoksa landing
    return 'landing';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());

  const handleStart = useCallback(() => {
    console.log('Hemen Başla tıklandı!');
    setCurrentPage('dashboard');
    localStorage.setItem('currentPage', 'dashboard');
    window.location.hash = 'dashboard';
  }, []);

  const handleBackToHome = useCallback(() => {
    console.log('Geri Dön tıklandı!');
    setCurrentPage('landing');
    localStorage.setItem('currentPage', 'landing');
    window.location.hash = '';
  }, []);

  // Hash değişikliklerini dinle
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'dashboard') {
        setCurrentPage('dashboard');
        localStorage.setItem('currentPage', 'dashboard');
      } else {
        setCurrentPage('landing');
        localStorage.setItem('currentPage', 'landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' ? (
        <LandingPage onStart={handleStart} />
      ) : (
        <Dashboard onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}

export default App;
