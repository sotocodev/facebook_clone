import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import styles from './HeaderMenus.module.css';

const Items = [
  {
    id: 0,
    title: 'Menu',
    icon: '/fill-menu-dots.svg',
  },
  {
    id: 1,
    title: 'Messenger',
    icon: '/fill-messenger.svg',
  },
  {
    id: 2,
    title: 'Notifications',
    icon: '/fill-bell.svg',
  },
  {
    id: 3,
    title: 'Profile',
    icon: '/profile.jpg',
    isProfile: true
  }
]

const HeaderMenus = () => {
  const renderItems = () => {
    return Items.map((item) => 
      <li 
        key={item.id}
        className={styles.HeaderMenus__Item}
        title={item.title}
      >
        <LinkTo
          customClass={styles.HeaderMenus__ItemLink}
        />
        <Icon
          path={item.icon}
          customClass={`${styles.HeaderMenus__ItemIcon} ${item.isProfile ? styles.HeaderMenus__ItemIconProfile : ''}`}
          alt='Menu'
        />
      </li>
    )
  }

  return (
    <ul className={styles.HeaderMenus}>
      {
        renderItems()
      }
    </ul>
  )
}

export default HeaderMenus;