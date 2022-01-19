import i18n from 'i18next';
import { NavigateFunction } from 'react-router-dom';

const switchLanguage = (language: string, navigate: NavigateFunction) => {
  let newPath: string;
  const hasLngParam = i18n.languages.some(lng =>
    location.pathname.includes(`/${lng}`)
  );

  if (hasLngParam) {
    newPath = location.pathname.replace(i18n.language, language);
  } else if (location.pathname === '/') {
    newPath = `/${language}`;
  } else {
    newPath = `/${language}`.concat(location.pathname);
  }

  i18n.changeLanguage(language).then(() => {
    navigate(newPath, { replace: true });
  });
};

export default switchLanguage;
