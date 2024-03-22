import Paragraph from '../Paragraph/Paragraph.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './IconText.module.css';





const IconText = ({iconPath, text, styleVariant}) => {

    const iconClass = styleVariant === 'shortcut' ? styles.IconText__IconShortcut : styles.IconText__Icon;
    return (
        <div className={styles.IconText}>
            <Icon path={iconPath} customClass={iconClass} />  
            <Paragraph text={text} customClass={styles.IconText__Text} />
        </div>
    )
}


export default IconText;





