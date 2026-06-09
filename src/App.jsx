import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import AppSplashScreen from './screens/AppSplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardGood from './screens/DashboardGood';
import DashboardBad from './screens/DashboardBad';
import JournalScreen from './screens/JournalScreen';
import GamesScreen from './screens/GamesScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import NavigationBar from './components/NavigationBar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [userState, setUserState] = useState('good'); // 'good' or 'bad'
  const [journalTab, setJournalTab] = useState('notes'); // 'notes' or 'tutorials'

  // Auto-navigate from splash screens
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('appSplash'), 2000);
      return () => clearTimeout(timer);
    }
    if (currentScreen === 'appSplash') {
      const timer = setTimeout(() => setCurrentScreen('login'), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleNavigation = (screen) => {
    if (screen === 'home') {
      // Toggle between good and bad states for demo
      setCurrentScreen(userState === 'good' ? 'dashboardGood' : 'dashboardBad');
    } else if (screen === 'journal') {
      setCurrentScreen('journalNotes');
    } else if (screen === 'games') {
      setCurrentScreen('games');
    } else if (screen === 'profile') {
      setCurrentScreen('thankYou');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'appSplash':
        return <AppSplashScreen onClick={() => setCurrentScreen('login')} />;
      case 'login':
        return <LoginScreen onNavigate={() => setCurrentScreen('register')} onLogin={() => setCurrentScreen('dashboardGood')} />;
      case 'register':
        return <RegisterScreen onNavigate={() => setCurrentScreen('login')} onSignUp={() => setCurrentScreen('dashboardGood')} />;
      case 'dashboardGood':
        return <DashboardGood onToggleBad={() => { setUserState('bad'); setCurrentScreen('dashboardBad'); }} />;
      case 'dashboardBad':
        return <DashboardBad onToggleGood={() => { setUserState('good'); setCurrentScreen('dashboardGood'); }} />;
      case 'journalNotes':
        return <JournalScreen tab="notes" />;
      case 'journalTutorials':
        return <JournalScreen tab="tutorials" />;
      case 'games':
        return <GamesScreen />;
      case 'thankYou':
        return <ThankYouScreen />;
      default:
        return <SplashScreen />;
    }
  };

  const showNav = ['dashboardGood', 'dashboardBad', 'journalNotes', 'journalTutorials', 'games', 'thankYou'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {/* Mobile Device Frame */}
      <div className="relative w-full max-w-[412px] aspect-[9/19] bg-black rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Screen Content */}
        <div className="flex-1 overflow-hidden bg-white relative">
          {renderScreen()}
        </div>

        {/* Navigation Bar */}
        {showNav && (
          <NavigationBar 
            currentScreen={currentScreen} 
            onNavigate={handleNavigation}
            onBarcodeScan={() => alert('📱 Barcode Scanner activated!\n\nThis is a demo prototype. In production, this would open the device camera for barcode scanning.')}
          />
        )}
      </div>
    </div>
  );
}
