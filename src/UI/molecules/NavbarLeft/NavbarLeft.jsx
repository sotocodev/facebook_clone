import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../atoms/Input/Input';
import styles from './NavbarLeft.module.css';

const NavbarLeft = () => {
  return (
    <div className={styles.navbarLeft}>
      <LinkTo
        path={'/'}
        text={
          <Icon
            width={40}
            height={40}
            path={'/icons/fill/logo.svg'}
            alt={'Facebook'}
          />
        }
        customClass={styles.logo}
      />

      <div className={styles.searchBox}>
        <Icon
          width={16}
          height={16}
          path={'/icons/outline/search.svg'}
          alt={'search'}
          customClass={styles.searchIcon}
        />

        <Input
          type={'text'}
          placeholder={'Buscar en Facebook'}
          name={'search'}
          id={'search'}
          customClass={styles.searchInput}
        />
      </div>
    </div>
  )
}

export default NavbarLeft;