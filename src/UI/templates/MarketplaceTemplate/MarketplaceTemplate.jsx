import styles from './MarketplaceTemplate.module.css'
import SideBarMarketplace from '../../organisms/SideBarMarketplace/SideBarMarketplace';
import PublicZoneMarketplace from '../../organisms/PublicZoneMarketplace/PublicZoneMarketplace';


const MarketplaceTemplate = () => {
	return (
		<>
		<div>
		 <PublicZoneMarketplace />
		 <SideBarMarketplace />
		</div>
		</>
	)
}

export default MarketplaceTemplate