import SideBarTitleMarketplace from "../../molecules/SideBarTitleMarketplace/SideBarTitleMarketplace";
import SideMainBarMarketplace from "../../molecules/SideMainBarMarketplace/SideMainBarMarketplace";
import SideFilterBarMarketplace from "../../molecules/SideFilterBarMarketplace/SideFilterBarMarketplace";
import SideCategoryBarMarketplace from "../../molecules/SideCategoryBarMarketplace/SideCategoryBarMarketplace";
import styles from './SideBarMarketplace.module.css'



const SideBarMarketplace = () => {
	return (
		<div className={styles.ContainerUniversal}>
			<SideBarTitleMarketplace />
			<SideMainBarMarketplace />
			<SideFilterBarMarketplace />
			<SideCategoryBarMarketplace />
		</div>
	)
}

export default SideBarMarketplace;