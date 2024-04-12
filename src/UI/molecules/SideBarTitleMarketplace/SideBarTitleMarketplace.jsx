import styles from './SideBarTitleMarketplace.module.css'
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Img from '../../atoms/Img/Img';



const SideBarTitleMarketplace = () => {
	return (
		<div className={styles.Container}>
			<Img 
			customClass={styles.Container__Gear}
			path="/ConfigGear.svg"
			/>
			<Heading 
			text="Marketplace" 
			customClass={styles.Container__Title}
			/>
			<Img
			customClass={styles.Container__Loupe} 
			path="/Loupe.svg" />
			<Input 
			placeholder="Buscar en Marketplace"
			customClass={styles.Container__Input}
			/>
		</div>
	)
}

export default SideBarTitleMarketplace