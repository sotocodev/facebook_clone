import Paragraph from '../Paragraph/Paragraph.jsx';
import Icon from '../Icon/Icon.jsx';
import styles from './IconText.module.css';

const IconText = ()=>{

    return (<div className={styles.IconText}>
        <Icon path="" customClass={styles.IconText__Icon} />  
        <Paragraph text= 'Yenifer Marrero' customClass={styles.IconText__Text} />
    </div>)

}


export default IconText;





