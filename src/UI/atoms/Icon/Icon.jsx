import styles from './Icon.module.css';

const Icon = ({ width, height, path, alt, customClass }) => {
  return <img 
    className={`${styles.icon} ${customClass}`}
    src={path}
    width={width}
    height={height}
    alt={alt}
    
  />
}

export default Icon;