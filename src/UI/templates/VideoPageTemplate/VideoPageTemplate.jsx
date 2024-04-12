import LeafMenuBar from "../../molecules/LeafMenuBar/LeafMenuBar"
import LeftMenu from "../../organisms/LeftMenu/LeftMenu"
import PublicateBox from "../../organisms/PublicateBox/PublicateBox"
import styles from "./VideoPageTemplate.module.css"

function VideoPageTemplate() {
  return (
    <div className={`${styles.VideoPageTemplate}`}>
      <div className={`${styles.VideoPageTemplate__Menu}`}>
    <LeftMenu/>
     </div>
     <div className={`${styles.VideoPageTemplate__VideoZone}`}>
      <PublicateBox time="22 de enero a las 11:33 pm" seguir={true} nickname="Zerahora Borracho"
      pathVideo="/Unerg.mp4"/>
     </div>
    </div>
  )
}

export default VideoPageTemplate
