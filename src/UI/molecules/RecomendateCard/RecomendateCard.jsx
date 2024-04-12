import Paragraph from "../../atoms/Paragraph/Paragraph"
import styles from "./RecomendateCard.module.css"

function RecomendateCard({customClassBox,customClassRecTwo,customClassRecOne}) {
  return (
    <div className={`${styles.RecomendateCard}${customClassBox}`}>
      <div className={`${styles.RecomendateCard__RecomendateOne}${customClassRecOne}`}>
        <Paragraph path="/profile.svg" text={"Hola"}/>
        
      </div>
      <div className={`${styles.RecomendateCard__RecomendateTwo}${customClassRecTwo}`}>

      </div>
    </div>
  )
}

export default RecomendateCard
