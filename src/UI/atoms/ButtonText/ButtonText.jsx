import styles from './ButtonText.module.css';

const ButtonText = ({ customClass, Text }) => {
  return (
    <button className={`${styles.ButtonText} ${customClass}`}>{Text}</button>
  );
};

export default ButtonText;
