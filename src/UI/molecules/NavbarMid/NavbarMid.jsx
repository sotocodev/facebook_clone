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
    <ul className={styles.NavbarMid}>
      <li 
        className={`${selected === 0 ? styles['NavbarMid__item--selected'] : ''} ${styles.NavbarMid__item}`}
        title='Inicio'
      >
        <Icon 
          path={`/icons/${selected === 0 ? 'fill' : 'outline'}/home.svg`}
          customClass={styles['NavbarMid__item-icon']}
          alt={'Home'}
        />

        <LinkTo
          path={'/'}
          callback={() => handleSelect(0)}
          customClass={styles['NavbarMid__item-link']}
        />
      </li>

      <li 
        className={`${selected === 1 ? styles['NavbarMid__item--selected'] : ''} ${styles.NavbarMid__item}`}
        title='Video'
      >
        <Icon 
          path={`/icons/${selected === 1 ? 'fill' : 'outline'}/video.svg`}
          customClass={styles['NavbarMid__item-icon']}
          alt={'Video'}
        />

        <LinkTo
          path={'/'}
          callback={() => handleSelect(1)}
          customClass={styles['NavbarMid__item-link']}
        />
      </li>

      <li 
        className={`${selected === 2 ? styles['NavbarMid__item--selected'] : ''} ${styles.NavbarMid__item}`}
        title='Marketplace'
      >
        <Icon
          path={`/icons/${selected === 2 ? 'fill' : 'outline'}/market.svg`}
          customClass={styles['NavbarMid__item-icon']}
          alt={'Marketplace'}
        />

        <LinkTo
          path={'/'}
          callback={() => handleSelect(2)}
          customClass={styles['NavbarMid__item-link']}
        />
      </li>

      <li 
        className={`${selected === 3 ? styles['NavbarMid__item--selected'] : ''} ${styles.NavbarMid__item}`}
        title='Videojuegos'
      >
        <Icon 
          path={`/icons/${selected === 3 ? 'fill' : 'outline'}/gamepad.svg`}
          customClass={styles['NavbarMid__item-icon']}
          alt={'Videojuegos'}
        />

        <LinkTo
          path={'/'}
          callback={() => handleSelect(3)}
          customClass={styles['NavbarMid__item-link']}
        />
      </li>
    </ul>
  )
}

export default NavbarMid;