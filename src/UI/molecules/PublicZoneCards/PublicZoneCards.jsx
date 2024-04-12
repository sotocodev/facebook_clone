import styles from './PublicZoneCards.module.css'
import Img from '../../atoms/Img/Img';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import PublicateCards from '../../../PublicateCards.json';

const PublicZoneCards = () => {
	return (
		<div className={styles.Card}>
		 {
		   PublicateCards && 
		   PublicateCards.map(({id, title, subtitle, paragraph, img}) =>{
		   	return(
		   		<div key={id}>
		   		 <Img
		   		  customClass={styles.Card__Img}
		   		  path={img}
		   		 />
		   		 <Heading 
		   		  customClass={styles.Card__Title}
		   		  text={subtitle}
		   		 />
				<Heading 
			     customClass={`${styles.Card__Title} ${styles.Subtitle}`}
  				 text={title}	
				/>
				<Paragraph
				  customClass={styles.Card__Text} 
				  text={paragraph}
				/>
		   		</div>
		   	)
		   })
		 }
		</div>
	)
}

export default PublicZoneCards