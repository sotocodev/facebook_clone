import styles from './Input.module.css';

const Input = ({ type, placeholder, value, name, id, customClass, onChange, onClick }) => {
  return <input
    type={type}
    name={name}
    id={id}
    value={value}
    placeholder={placeholder}
    className={`${styles.Input} ${customClass}`}
    onChange={onChange}
    onClick={onClick}

  />
}

export default Input;