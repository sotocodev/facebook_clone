import Style from "../tittle_4/tittle_4.module.css"
const Tittle=({customClass,Text})=>{

    return(
        <>
        <h4 className={`${Style.Titulo_4} ${customClass}`}>{Text}</h4>
        </>
    )
}
export default Tittle