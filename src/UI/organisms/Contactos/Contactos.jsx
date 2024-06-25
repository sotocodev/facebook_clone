import SubTitleOpcion2 from '../../molecules/SubTitleOpcion2/SubTitleOpcion2';
import ImgSubTitle from '../../molecules/ImgSubTitle/ImgSubTitle';
import styles from '../Contactos/Contactos.module.css';

const Contactos = () => {
  return (
    <div className={styles.Contactos}>
      <SubTitleOpcion2 />
      <ImgSubTitle
        customClassImg={styles.ImgSubTitle}
        Text="Luis Silva"
        path="https://www.svgrepo.com/show/374762/people.svg"
      />
      <ImgSubTitle
        customClassImg={styles.ImgSubTitle}
        Text="Yusibeth Soto"
        path="https://www.svgrepo.com/show/374762/people.svg"
      />
      <ImgSubTitle
        customClassImg={styles.ImgSubTitle}
        Text="Robert Sanchez"
        path="https://www.svgrepo.com/show/374762/people.svg"
      />
      <ImgSubTitle
        customClassImg={styles.ImgSubTitle}
        Text="Jesus Soto"
        path="https://www.svgrepo.com/show/374762/people.svg"
      />
      <ImgSubTitle
        customClassImg={styles.ImgSubTitle}
        Text="Leonardo Peña"
        path="https://www.svgrepo.com/show/374762/people.svg"
      />
      <ImgSubTitle
        customClassImg={styles.ImgSubTitle}
        Text="Alejandron Hernandez"
        path="https://www.svgrepo.com/show/374762/people.svg"
      />
    </div>
  );
};
export default Contactos;
