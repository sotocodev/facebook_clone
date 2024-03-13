import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import styles from './NavbarRight.module.css';

const NavbarRight = () => {
  return (
    <div className={styles.navbarRight}>
      <LinkTo
        text={
          <Icon
            width={20}
            height={20}
            path={'/icons/fill/menu-dots.svg'}
            alt={'Menu'}
          />
        }
        customClass={styles.button}
      />

      <LinkTo
        text={
          <Icon
            width={20}
            height={20}
            path={'/icons/fill/messenger.svg'}
            alt={'Messenger'}
          />
        }
        customClass={styles.button}
      />

      <LinkTo
        text={
          <Icon
            width={20}
            height={20}
            path={'/icons/fill/bell.svg'}
            alt={'Notifications'}
          />
        }
        customClass={styles.button}
      />

      <LinkTo
        text={
          <Icon
            width={20}
            height={20}
            path={'/icons/fill/user.svg'}
            alt={'User'}
          />
        }
        customClass={`${styles.button} ${styles.userImage}`}
      />
    </div>
  )
}

export default NavbarRight;