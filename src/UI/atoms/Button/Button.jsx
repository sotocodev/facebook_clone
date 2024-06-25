import Img from '../Img/Img';
import styles from './Button.module.css';

const Button = ({ text, path, toImageClass, customClass, type, click }) => {
  return (
    <button
      onClick={click}
      type={type}
      className={`${styles.Button} ${customClass}`}
    >
      {path && <Img pathImg={path} customClass={toImageClass} />}
      {text && text}
    </button>
  );
};

export default Button;
