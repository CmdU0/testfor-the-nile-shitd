import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import MenuPage from './pages/MenuPage';
import AddonsPage from './pages/AddonsPage';
import AboutPage from './pages/AboutPage';
import InfoPage from './pages/InfoPage';
import LocationPage from './pages/LocationPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/addons" element={<AddonsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/location" element={<LocationPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;