"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { translations, type Content, type Language } from '@/lib/content/i18n'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: Content
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const DEFAULT_LANGUAGE: Language = 'en'

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE)

    // Persist language preference
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && translations[savedLanguage]) {
            setLanguage(savedLanguage)
        }
    }, [])

    const handleLanguageChange = (newLanguage: Language) => {
        setLanguage(newLanguage)
        localStorage.setItem('language', newLanguage)
    }

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage: handleLanguageChange,
            t: translations[language]
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
} 