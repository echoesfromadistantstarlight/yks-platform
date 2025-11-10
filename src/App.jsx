import { useState, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleStart = useCallback(() => {
    console.log('Hemen Başla tıklandı!');
    setCurrentPage('dashboard');
  }, []);

  const handleBackToHome = useCallback(() => {
    console.log('Geri Dön tıklandı!');
    setCurrentPage('landing');
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
