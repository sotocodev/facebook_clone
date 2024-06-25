import SubTitle from '../../atoms/SubTitle/SubTitle';
import ImgSubTitle from '../../molecules/ImgSubTitle/ImgSubTitle';
import Line from '../../atoms/Line/Line';
import styles from './Cumple.module.css';

const Cumple = () => {
  return (
    <div className={styles.Cumple}>
      <SubTitle Text="Cumpleaños" customClassSubTitle={styles.SubTitle} />
      <ImgSubTitle
        customClassImg={styles.ImgSubTitle}
        Text="Hoy es el cumpleaños de Edward  Gonzalez"
        path="https://www.svgrepo.com/show/507313/gift.svg"
      />
      <Line />
    </div>
  );
};
export default Cumple;
