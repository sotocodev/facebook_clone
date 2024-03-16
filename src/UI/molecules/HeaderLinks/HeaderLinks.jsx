import { useState } from 'react';
import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import styles from './HeaderLinks.module.css';

const Items = [
  {
    id: 0,
    title: 'Inicio',
    path: '/', // Por definir
    icon: 'home'
  },
  {
    id: 1,
    title: 'Video',
    path: '/', // Por definir
    icon: 'video'
  },
  {
    id: 2,
    title: 'Marketplace',
    path: '/', // Por definir
    icon: 'market'
  },
  {
    id: 3,
    title: 'Juegos',
    path: '/', // Por definir
    icon: 'gamepad'
  }
]

const HeaderLinks = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  }

  const renderItems = () => {
    return Items.map((item) => 
      <li 
        key={item.id}
        className={`${selected === item.id ? styles.HeaderLinks__ItemSelected : ''} ${styles.HeaderLinks__Item}`}
        title={item.title}
      >
        <Icon 
          path={`/${selected === item.id ? 'fill' : 'outline'}-${item.icon}.svg`}
          customClass={styles.HeaderLinks__ItemIcon}
          alt={item.title}
        />

        <LinkTo
          path={item.path}
          callback={() => handleSelect(item.id)}
          customClass={styles.HeaderLinks__ItemLink}
        />
      </li>
    )
  }

  return (
    <ul className={styles.HeaderLinks}>
      {
        renderItems()
      }
    </ul>
  )
}

export default HeaderLinks;