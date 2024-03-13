import Style from "../cumple/cumple.module.css"
import Titlle_3 from "../../atoms/titlle_3/tittle3";
import Im_ti from "../../molecules/Img_Tittle/im_tittle"
import Line from "../../atoms/horizontal_line/horizontal_line";
const Cumple=()=>{
    return(
        <>
        <div>
        <Titlle_3 Text={"Cumpleaños"}/>
        <Im_ti customClass={Style.Img} Text={"Hoy es el cumpleaños de Edward  Gonzalez"} href={"https://www.svgrepo.com/show/507313/gift.svg"}/>
        <Line/>
        </div>
        </>
    )
}
export default Cumple;