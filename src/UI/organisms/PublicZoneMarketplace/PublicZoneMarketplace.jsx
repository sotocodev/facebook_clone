import styles from './PublicZoneMarketplace.module.css'
import PublicZoneCards from "../../molecules/PublicZoneCards/PublicZoneCards";
import PublicMainZoneMarketplace from "../../molecules/PublicMainZoneMarketplace/PublicMainZoneMarketplace";

const PublicZoneMarketplace = () => {
	return (
		<>
		 <PublicMainZoneMarketplace />
		 <PublicZoneCards />
		</>
	)
}

export default PublicZoneMarketplace