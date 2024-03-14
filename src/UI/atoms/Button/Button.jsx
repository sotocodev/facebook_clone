import styles from './Button.module.css';

const Button = ({ content, customClass, type, click }) => {

    return (
        <button onClick={click} type={type} className={`${styles.Button} ${customClass}`}>
            { content }
        </button>
    )
}

export default Button;
