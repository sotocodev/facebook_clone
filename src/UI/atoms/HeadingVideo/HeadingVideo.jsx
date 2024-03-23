import styles from "./HeadingVideo.module.css";

const HeadingVideo = ({ customClass, text }) => {
  return (
    <div className={styles.Heading__Div}>
      <h1 className={`${styles.Heading__Title} ${customClass}`}>{text}</h1>
    </div>
  );
};

export default HeadingVideo;
