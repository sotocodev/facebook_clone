import styles from './Photo.module.css';

const Photo = ({ w, img}) => {
    return <>
        <img className={`${styles.Photo}`} src={img} width={w} height={w} />
    </>
}

export default Photo;
