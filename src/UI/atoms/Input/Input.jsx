import Icon from '../Icon/Icon';
import styles from './Input.module.css';

const Input = ({
  iconPath,
  iconPathCustomClass,
  InputContainerCustomClass,
  type,
  placeholder,
  value,
  name,
  id,
  customClass,
  onChange,
  onClick,
  disabled,
}) => {
  return iconPath ? (
    <div className={`${styles.InputContainer} ${InputContainerCustomClass}`}>
      <Icon path={iconPath} customClass={iconPathCustomClass} />
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`${styles.Input} ${customClass}`}
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  ) : (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      className={`${styles.Input} ${customClass}`}
      onChange={onChange}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default Input;
