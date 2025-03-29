import { en } from './en';
import { es } from './es';

export const translations = {
  en,
  es,
} as const;

// Type for our content structure
export type Content = typeof en;
export type Language = keyof typeof translations;

// Helper to ensure all translations have the same structure
export function validateTranslations() {
  if (process.env.NODE_ENV === 'development') {
    const languages = Object.keys(translations) as Language[];
    const referenceKeys = Object.keys(en);

    languages.forEach((lang) => {
      const currentKeys = Object.keys(translations[lang]);
      const missingKeys = referenceKeys.filter(
        (key) => !currentKeys.includes(key)
      );

      if (missingKeys.length > 0) {
        console.warn(
          `Missing translations in ${lang}:`,
          missingKeys
        );
      }
    });
  }
} 