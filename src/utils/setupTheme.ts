import Storage from 'utils/storage';
import { Themes } from '@/constants';

const setupTheme = () => {
  if (typeof window !== 'undefined') {
    const storage = new Storage<string>(
      process.env.THEME_STORAGE_KEY ?? 'theme'
    );
    const theme = storage.get();

    if (theme) {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.add(Themes.Light);
    }
  }
};

export default setupTheme;
