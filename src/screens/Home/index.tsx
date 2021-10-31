import { useTranslation } from 'react-i18next';
import switchTheme from 'utils/switchTheme';
import './styles.scss';

function Home() {
  const { t } = useTranslation();

  return (
    <div className='home'>
      <h1 className='home__title'>
        {t('i')} <span className='home__heart'>&#10084;</span> {t('react')}
      </h1>
      <button className='home__theme-btn' onClick={switchTheme}>
        {t('switch-theme-btn')}
      </button>
    </div>
  );
}

export default Home;
