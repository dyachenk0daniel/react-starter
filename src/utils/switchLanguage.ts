import i18n from 'i18next';
import history from 'utils/history';

const switchLanguage = (language: string) => {
  let newPath: string;
  const hasLngParam = i18n.languages.some(lng => history.location.pathname.includes(`/${lng}`));

  if (hasLngParam) {
    newPath = history.location.pathname.replace(i18n.language, language);
  } else if (history.location.pathname === '/') {
    newPath = `/${language}`
  } else {
    newPath = `/${language}`.concat(history.location.pathname);
  }

  i18n.changeLanguage(language).then(() => {
    history.replace(newPath);
  });
};

export default switchLanguage;
