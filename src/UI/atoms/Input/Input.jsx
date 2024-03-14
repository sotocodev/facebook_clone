import styles from './Input.module.css';

const Input = ({ type, placeholder, value, name, id, customClass, onChange, onClick,disabled }) => {
  return <input
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
}

export default Input;