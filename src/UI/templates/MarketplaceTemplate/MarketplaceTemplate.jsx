import SideBarMarketplace from "../../organisms/SideBarMarketplace/SideBarMarketplace";
import PublicZoneMarketplace from "../../organisms/PublicZoneMarketplace/PublicZoneMarketplace";
import HomeHeader from "../../organisms/HomeHeader/HomeHeader"
import styles from "./MarketplaceTemplate.module.css";
const MarketplaceTemplate = () => {
  return (
    <>
      <div className={styles.Marketplace}>
        <HomeHeader />
        <PublicZoneMarketplace />
        <SideBarMarketplace />
      </div>
    </>
  );
};

export default MarketplaceTemplate;
