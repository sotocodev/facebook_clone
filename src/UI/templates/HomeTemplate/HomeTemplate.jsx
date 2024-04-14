import PublicateZone from "../../organisms/PublicateZone/PublicateZone";
import HomeColunmRight from "../../organisms/HomeColumRight/HomeColumRight";
import HomeColunmLeft from "../../organisms/HomeColumLeft/HomeColumLeft";
import HomeHeader from "../../organisms/HomeHeader/HomeHeader";
import styles from "./HomeTemplate.module.css";

const HomeTemplate = () => {
  return (
    <div className={styles.HomeTemplate}>
      <HomeHeader />
      <div className={styles.HomeTemplate__ParteCentral}>
        <HomeColunmLeft />
        <PublicateZone />
        <HomeColunmRight />
      </div>
    </div>
  );
};

export default HomeTemplate;
