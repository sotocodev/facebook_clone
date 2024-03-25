import Style from "./SubTitle.module.css"

const SubTitle=({Text,customClassSubTitle})=>{
    return <h3 className={`${Style.SubTitle} ${customClassSubTitle} `}>{Text}</h3>
}
export default SubTitle