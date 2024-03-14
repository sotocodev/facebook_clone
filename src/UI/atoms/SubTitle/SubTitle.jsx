import Style from "./SubTitle.module.css"

const SubTitle=({customClass,Text})=>{

    return <h3 className={`${customClass} ${Style.SubTitle} `}>{Text}</h3>

}
export default SubTitle