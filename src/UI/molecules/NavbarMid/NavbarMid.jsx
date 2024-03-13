import { useState } from 'react';
import LinkTo from '../../atoms/LinkTo/LinkTo';
import Icon from '../../atoms/Icon/Icon';
import styles from './NavbarMid.module.css';

const NavbarMid = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  }

  return (
    <ul className={styles.navbarMid}>
      <li 
        className={selected === 0 ? styles.selected : ''}
        title='Inicio'
      >
        <LinkTo
          path={'/'}
          text={
            <Icon 
              width={24}
              height={24}
              path={`/icons/${selected === 0 ? 'fill' : 'outline'}/home.svg`}
              alt={'Home'}
            />
          }
          callback={() => handleSelect(0)}
        />
      </li>

      <li 
        className={selected === 1 ? styles.selected : ''}
        title='Video'
      >
        <LinkTo
          path={'/'}
          text={
            <Icon 
              width={24}
              height={24}
              path={`/icons/${selected === 1 ? 'fill' : 'outline'}/video.svg`}
              alt={'Video'}
            />
          }
          callback={() => handleSelect(1)}
        />
      </li>

      <li 
        className={selected === 2 ? styles.selected : ''}
        title='Marketplace'
      >
        <LinkTo
          path={'/'}
          text={
            <Icon
              width={24}
              height={24}
              path={`/icons/${selected === 2 ? 'fill' : 'outline'}/market.svg`}
              alt={'Marketplace'}
            />
          }
          callback={() => handleSelect(2)}
        />
      </li>

      <li 
        className={selected === 3 ? styles.selected : ''}
        title='Videojuegos'
      >
        <LinkTo
          path={'/'}
          text={
            <Icon 
              width={24}
              height={24}
              path={`/icons/${selected === 3 ? 'fill' : 'outline'}/gamepad.svg`}
              alt={'Videojuegos'}
            />
          }
          callback={() => handleSelect(3)}
        />
      </li>
    </ul>
  )
}

export default NavbarMid;