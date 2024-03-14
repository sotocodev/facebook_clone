import styles from './Logo.module.css';
import logo from './logo.svg'

export const Logo = () =>{
	return(
		<img className={styles.Estilos_Logo} src={logo}/>
	)
}
export default Logo;