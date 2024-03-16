import HeaderSearch from '../../molecules/HeaderSearch/HeaderSearch';
import HeaderLinks from '../../molecules/HeaderLinks/HeaderLinks';
import HeaderMenus from '../../molecules/HeaderMenus/HeaderMenus';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <HeaderSearch />
      <HeaderLinks />
      <HeaderMenus />
    </header>
  )
}

export default Header;