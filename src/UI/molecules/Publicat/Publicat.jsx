import Img from '../../atoms/Img/Img';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './Publicat.module.css';

const Publicat = ({ path, Text, textP }) => {
  return (
    <div className={styles.Publicat}>
      <Img customClass={styles.Publicat__Img} pathImg={path} />
      <div className={styles.Publicat__Text}>
        <SubTitle
          Text={Text}
          customClassSubTitle={styles.Publicat__Text__SubTitle}
        />
        <Paragraph
          text={textP}
          customClass={styles.Publicat__Text__Paragraph}
        />
      </div>
    </div>
  );
};
export default Publicat;
