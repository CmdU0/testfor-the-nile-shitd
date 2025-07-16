import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    menu: "MENU",
    addons: "ADDONS", 
    about: "ABOUT LE PETIT CHEF",
    info: "MORE INFORMATION",
    location: "LOCATION",
    
    // Common
    book_now: "Book Now",
    call_now: "Call Now",
    email_us: "Email Us",
    reserve_table: "Reserve Your Table"
  },
  ar: {
    // Navigation
    menu: "القائمة",
    addons: "الإضافات",
    about: "عن لو بيتي شيف",
    info: "معلومات أكثر",
    location: "الموقع",
    
    // Common
    book_now: "احجز الآن",
    call_now: "اتصل الآن",
    email_us: "راسلنا",
    reserve_table: "احجز طاولتك"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};