import Paragraph from '../../atoms/Paragraph/Paragraph'
import styles from "./LeafMenuButtons.module.css"

function LeafMenuButtons({}) {


    const Arr = ({pathI, textBu}) => {
        return <Paragraph text={textBu} path={pathI}/>
      }
      const data = [{Img:"/camera.svg", textBu:"Inicio"},{Img:"/reels.svg", textBu: "En Vivo"},{Img:"/cinema.svg", textBu: "Reels"},{Img:"/video.svg", textBu: "Programas"}, {Img:"/rocket.svg", textBu: "Explorar"},  {Img:"/saved.svg", textBu: "Videos Guardados"}]

  return (
    <div className={styles.LeafMenuButtons}>     
         {data.map((Item, index) => (
          <Arr key={index} pathI={Item.Img} textBu={Item.textBu}/>
         ))}
    </div>
  )
}

export default LeafMenuButtons
