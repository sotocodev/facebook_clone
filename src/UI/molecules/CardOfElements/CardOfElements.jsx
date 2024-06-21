import Img from '../../atoms/Img/Img';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './CardOfElements.module.css';

const CardOfElements = ({ type , data=[]}) => {
    return (
 <>

     <div className={styles.cardSection}>
      <div className={styles.cardSection__title}>
      <h2>{type === 'friends' ? 'Friends' : 'Photos'}</h2>
      <p>See all {type === 'friends' ? 'friends' : 'photos'}</p>
      </div>

    
      <div className={styles.cardSection__pictureGrid}>
      <div className={type === 'friends' ? styles.pictureGrid__friend: styles.pictureGrid__friend}>
        {data.map((item, index) => (
          <div key={index}className={type === 'friends' ? styles.gridItem__friend: styles.gridItem__photos}>
            {type === 'friends' ? (
              <>
              <div className={type === 'friends' ? styles.gridItem__friend_Container: styles.gridItem__photos}>
                <img src={item.image} alt={item.name} />
                </div>
                <div>
                <span>{item.name}</span>

                </div>
              </>
            ) : (
              <img src={item} alt={`Foto ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
      </div>
    </div> 
  </>
    )
}

export default CardOfElements;
