import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import Input from '../../atoms/Input/Input';
import styles from './NavbarLeft.module.css';

const NavbarLeft = () => {
  return (
    <div className={styles.NavbarLeft}>
      <div className={styles.NavbarLeft__logo}>
        <Icon
          path={'/icons/fill/logo.svg'}
          customClass={styles['NavbarLeft__logo-icon']}
          alt={'Facebook'}
        />

        <LinkTo
          path={'/'}
          customClass={styles['NavbarLeft__logo-link']}
        />
      </div>

      <div className={styles.SearchBox}>
        <Icon
          path={'/icons/outline/search.svg'}
          alt={'search'}
          customClass={styles['SearchBox__icon']}
        />

        <Input
          type={'text'}
          placeholder={'Buscar en Facebook'}
          name={'search'}
          id={'search'}
          customClass={styles['SearchBox__input']}
        />
      </div>
    </div>
  )
}

export default NavbarLeft;