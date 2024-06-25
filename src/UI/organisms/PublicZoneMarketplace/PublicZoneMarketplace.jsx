import PublicZoneCards from '../../molecules/PublicZoneCards/PublicZoneCards';
import PublicMainZoneMarketplace from '../../molecules/PublicMainZoneMarketplace/PublicMainZoneMarketplace';
import styles from './PublicZoneMarketplace.module.css';

const PublicZoneMarketplace = () => {
  return (
    <div className={styles.PublicZone}>
      <PublicMainZoneMarketplace />
      <PublicZoneCards />
    </div>
  );
};

export default PublicZoneMarketplace;
