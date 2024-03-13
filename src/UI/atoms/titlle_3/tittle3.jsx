import Style from "../titlle_3/tittle3.module.css"

const Titlle_3=({customClass,Text})=>{
    return(
        <>
        <h3 className={`${Style.titulo} ${customClass}`}>{Text}</h3>
        </>
    )
}
export default Titlle_3;