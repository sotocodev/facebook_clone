import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../atoms/Input/Input';
import styles from './HeaderSearch.module.css';

const HeaderSearch = () => {
  return (
    <div className={styles.HeaderSearch}>
      <div className={styles.HeaderSearch__Logo}>
        <Icon
          path='/fill-logo.svg'
          customClass={styles.HeaderSearch__LogoIcon}
          alt='Facebook'
        />

        <LinkTo
          path='/'
          customClass={styles.HeaderSearch__LogoLink}
        />
      </div>

      <div className={styles.HeaderSearch__SearchBox}>
        <Icon
          path='/outline-search.svg'
          alt='search'
          customClass={styles.HeaderSearch__SearchBoxIcon}
        />

        <Input
          type='text'
          placeholder='Buscar en Facebook'
          name='search'
          id='search'
          customClass={styles.HeaderSearch__SearchBoxInput}
        />
      </div>
    </div>
  )
}

export default HeaderSearch;