
import Icon from '../Icon/Icon';
import styles from './Paragraph.module.css';

const Paragraph = ({text,iconPath, customClass, ParagraphContainerCustomClass, iconCustomClass, IconContainerCustomClass}) => {
  return (
    
      iconPath ? (
        <div className={`${styles.ParagraphContainer} ${ParagraphContainerCustomClass}`}>
          <div className={IconContainerCustomClass}>
          <Icon path={iconPath} customClass={iconCustomClass}/>
          </div>
          <p className={customClass}>{text}</p>
        </div>
      ):
  ) : (
    <p className={`${styles.Paragraph} ${customClass}`}>{text}</p>
)
}

export default Paragraph;