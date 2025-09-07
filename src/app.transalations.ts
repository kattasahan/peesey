import config from './app.config';
import { ENGLISH } from './translations/english';

const selectedLanguage: string = config.translations.selectedLanguage;

const files = {
  ENGLISH: ENGLISH,
};

export const translations = files[selectedLanguage as keyof typeof files];
