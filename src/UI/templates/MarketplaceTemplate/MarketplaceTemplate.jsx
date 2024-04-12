import SideBarMarketplace from '../../organisms/SideBarMarketplace/SideBarMarketplace';
import PublicZoneMarketplace from '../../organisms/PublicZoneMarketplace/PublicZoneMarketplace';
import styles from './MarketplaceTemplate.module.css'


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