import SubTitle from '../../atoms/SubTitle/SubTitle';
import ButtonColumnRight from '../../atoms/ButtonColumnRight/ButtonColumnRight';
import styles from './SubTitleOpcion2.module.css';

const SubTitleOpcion2 = () => {
  return (
    <div className={styles.SubTitleOpcion2}>
      <SubTitle
        Text={'Contactos'}
        customClassSubTitle={styles.SubTitleOpcion2__SubTitle}
      />
      <div>
        <ButtonColumnRight
          customClass={styles.SubTitleOpcion2__Button}
          path={'https://www.svgrepo.com/show/479496/magnifying-glass-11.svg'}
          customClassImg={styles.SubTitleOpcion2__Img}
        />
        <ButtonColumnRight
          customClass={styles.SubTitleOpcion2__Button}
          path={'https://www.svgrepo.com/show/395488/options.svg'}
          customClassImg={styles.SubTitleOpcion2__Img}
        />
      </div>
    </div>
  );
};
export default SubTitleOpcion2;
