import Style from "./SubTitle.module.css"

const SubTitle=({Text,customClass__SubTitle})=>{
    return <h3 className={`${customClass__SubTitle} ${Style.SubTitle} `}>{Text}</h3>
}
export default SubTitle