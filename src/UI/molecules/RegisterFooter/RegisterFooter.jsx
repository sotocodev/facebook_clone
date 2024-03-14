import styles from './Register.module.css'
import Languages from '../../atoms/Languages/Languages';
import Extras from '../../atoms/Extras/Extras';

export const RegisterFooter = () =>{

	return(
		<>
		<div className={styles.Contenedor_Lenguajes}>
			<Languages>
			</Languages>
		</div>
		<div className={styles.Contenedor_Extras}>
			<Extras/>
		</div>
		</>
	)
}
export default RegisterFooter;
