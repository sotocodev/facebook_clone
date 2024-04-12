import styles from './SideBarMarketplace.module.css'
import SideBarTitleMarketplace from "../../molecules/SideBarTitleMarketplace/SideBarTitleMarketplace";
import SideMainBarMarketplace from "../../molecules/SideMainBarMarketplace/SideMainBarMarketplace";
import SideFilterBarMarketplace from "../../molecules/SideFilterBarMarketplace/SideFilterBarMarketplace";
import SideCategoryBarMarketplace from "../../molecules/SideCategoryBarMarketplace/SideCategoryBarMarketplace";



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