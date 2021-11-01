import { useTranslation } from 'react-i18next';
import switchTheme from 'utils/switchTheme';
import switchLanguage from 'utils/switchLanguage';
import { selectOptions } from 'screens/Home/constants';
import i18n from "i18next";
import './styles.scss';

function Home() {
  const { t } = useTranslation();

  return (
    <div className='home'>
      <h1 className='home__title'>
        {t('i')} <span className='home__heart'>&#10084;</span> {t('react')}
      </h1>
      <div className='home__btns-container'>
        <select
          defaultValue={i18n.language}
          onChange={e => switchLanguage(e.target.value)}
        >
          {selectOptions.map(({ value, content }, index) => (
            <option value={value} key={value + index}>
              {content}
            </option>
          ))}
        </select>
        <button className='home__theme-btn' onClick={switchTheme}>
          {t('switch-theme-btn')}
        </button>
      </div>
    </div>
  );
}

export default Home;
