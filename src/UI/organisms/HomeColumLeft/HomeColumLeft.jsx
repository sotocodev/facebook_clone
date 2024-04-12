import Line from "../../atoms/Line/Line"
import OpDeUsuario from "../OpDeUsuario/OpDeUsuario"
import AcessosDirectosUser from "../AcessosDirectosUser/AcessosDirectosUser"
import DerechosReservados from "../../organisms/DerechosReservados/DerechosReservados"
import styles from "./HomeColumLeft.module.css"

const HomeColumLeft =()=> {
  return (
<div className={styles.HomeColumLeft}>
  <div className={styles.HomeColumLef__Aside}>
  <OpDeUsuario/>
  <Line/>
  <AcessosDirectosUser/>
  <DerechosReservados/>
  </div>
</div>
  )
}

export default HomeColumLeft