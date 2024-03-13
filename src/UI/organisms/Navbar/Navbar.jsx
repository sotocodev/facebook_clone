import NavbarLeft from "../../molecules/NavbarLeft/NavbarLeft";
import NavbarMid from "../../molecules/NavbarMid/NavbarMid";
import NavbarRight from "../../molecules/NavbarRight/NavbarRight";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavbarLeft /> 
      <NavbarMid />
      <NavbarRight />
    </nav>
  )
}

export default Navbar;