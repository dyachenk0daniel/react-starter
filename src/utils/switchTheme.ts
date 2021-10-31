import { Themes } from '@/constants';
import Storage from 'utils/storage';

const switchTheme = () => {
  if (typeof window !== 'undefined') {
    const storage = new Storage(process.env.THEME_STORAGE_KEY ?? 'theme');

    if (document.documentElement.classList.contains(Themes.Light)) {
      document.documentElement.classList.replace(Themes.Light, Themes.Dark);
      storage.set(Themes.Dark);
    } else {
      document.documentElement.classList.replace(Themes.Dark, Themes.Light);
      storage.set(Themes.Light);
    }
  }
};

export default switchTheme;
