import styles from "./InputVideo.module.css";

const InputVideo = ({ customClass, type, onClick, placeH, path }) => {
  return (
    <div className={styles.Input__Div}>
     
        <img className={styles.Input__Img} src={path}></img>
    
      <input
        className={`${styles.Input} ${customClass}`}
        placeholder={placeH}
        type={type}
        onClick={onClick}
      ></input>
    </div>
  );
};

export default InputVideo;
