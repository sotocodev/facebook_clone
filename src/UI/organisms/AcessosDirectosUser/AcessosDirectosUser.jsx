import SubTitle from "../../atoms/SubTitle/SubTitle";
import ImgSubTitle from "../../molecules/ImgSubTitle/ImgSubTitle";
import ButtonText from "../../atoms/ButtonText/ButtonText";
import styles from "./AcessosDirectosUser.module.css";

const AcessosDirectosUser = () => {
  return (
    <div className={styles.AcessosDirectosUser}>
      <div className={styles.AcessosDirectosUser__titulo}>
        <SubTitle
          Text="Tus accesos directos"
          customClassSubTitle={styles.AcessosDirectosUser__ContainerText}
        />
        <ButtonText
          Text="Editar"
          customClass={styles.AcessosDirectosUser__titulo__ButtonText}
        />
      </div>
      <ImgSubTitle
        Text="Agar.io"
        path="/public/Agar.io.jpeg"
        customClassImg={styles.AcessosDirectosUser__Img}
        customClass={styles.AcessosDirectosUser__ImgSubTitle}
      />
      <ImgSubTitle
        Text="Criminal Case"
        path="/public/Criminal-Case.jpeg"
        customClassImg={styles.AcessosDirectosUser__Img}
        customClass={styles.AcessosDirectosUser__ImgSubTitle}
      />
      <ImgSubTitle
        Text="Monster Legends"
        path="/public/monster-legends.jpeg"
        customClassImg={styles.AcessosDirectosUser__Img}
        customClass={styles.AcessosDirectosUser__ImgSubTitle}
      />
      <ImgSubTitle
        Text="Mustants: Genetic Gladiators"
        path="/public/Mutans-Genetic-Gradiator.jpeg"
        customClassImg={styles.AcessosDirectosUser__Img}
        customClass={styles.AcessosDirectosUser__ImgSubTitle}
      />
    </div>
  );
};

export default AcessosDirectosUser;
