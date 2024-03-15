import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import styles from './NavbarRight.module.css';

const NavbarRight = () => {
  return (
    <div className={styles.NavbarRight}>
      <div className={styles.NavbarRight__button}>
        <LinkTo
          customClass={styles['NavbarRight__button-link']}
        />
        <Icon
          path={'/icons/fill/menu-dots.svg'}
          customClass={styles['NavbarRight__button-icon']}
          alt={'Menu'}
        />
      </div>

      <div className={styles.NavbarRight__button}>
        <LinkTo
          customClass={styles['NavbarRight__button-link']}
        />
        <Icon
          path={'/icons/fill/messenger.svg'}
          customClass={styles['NavbarRight__button-icon']}
          alt={'Messenger'}
        />
      </div>

      <div className={styles.NavbarRight__button}>
        <LinkTo
          customClass={styles['NavbarRight__button-link']}
        />
        <Icon
          path={'/icons/fill/bell.svg'}
          customClass={styles['NavbarRight__button-icon']}
          alt={'Notifications'}
        />
      </div>

      <div className={styles.NavbarRight__button}>
        <LinkTo
          customClass={styles['NavbarRight__button-link']}
        />
        <Icon
          path={'/icons/fill/user.svg'}
          customClass={styles['NavbarRight__button-icon']}
          alt={'User'}
        />
      </div>      
    </div>
  )
}

export default NavbarRight;