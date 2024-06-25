import styles from './Img.module.css';

const Img = ({ customClass, pathImg, pathVideo }) => {
  return pathImg ? (
    <img className={`${styles.Img} ${customClass}`} src={pathImg} />
  ) : (
    <video
      controls={true}
      src={pathVideo}
      className={`${styles.Img} ${customClass}`}
    ></video>
  );
};

export default Img;
