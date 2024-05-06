import Title from '../../atoms/Title/Title'
import Icon from '../../atoms/Icon/Icon'
import Input from '../../atoms/Input/Input'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import styles from './LeftGameMain.module.css'

const LeftGameMain = ({customClass}) => {
  return (
    <div className={`${styles.LeftGameMain} ${customClass}`}>
      <div className={styles.LeftGameMain__Div_PrimeraFila}>
        <Title text="Juegos" customClass={styles.PrimeraFila__Titulo}/>
        <Icon customClass={styles.LeftGameMain__PrimeraFila_Img} IconContainerCustomClass={styles.PimeraFila__Container_Img} path="/config.svg"/>
      </div>  
      <div className={styles.LeftGameMain__Div_SegundaFila}>
        <Input customClass={styles.SegundaFila__Input} InputContainerCustomClass={styles.SegundaFila__Input_Container} iconPathCustomClass={styles.SegundaFila__Img_Lupa} iconPath="/lupa.svg" placeholder="Buscar"/>
        <Paragraph text="Jugar" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/control.svg" />

        <Paragraph text="Actividad de Juego" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/user.svg" />
        <Paragraph text="Notificaciones" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/notificacion.svg" />
        
        <hr className={styles.Separador} />

        <div className={styles.LeftGameMain__Div_TerceraFila}>
        <Title text="Tus Juegos" customClass={styles.TerceraFila__Titulo}/>
        <a className={styles.TerceraFila__Enlace} href="">Ver Todos</a>
        <Paragraph text="Guarda un juego en Tus juegos para crear un acceso directo aquí." customClass={styles.TerceraFila__Text}/>
        <Paragraph text="Guardar Juegos" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/saved.svg" />
        
        <hr className={styles.Separador} />
        <div className={styles.CuartaFila__Div}>
        <Title text="Categorias" customClass={styles.TerceraFila__Titulo}/>
         <Paragraph text="Todos los juegos" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/controlSide.svg" />
         <Paragraph text="Accion" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/gun.svg" />
         <Paragraph text="Aventuras" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/mapa.svg" />
         <Paragraph text="Recreativos" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/controlPalanca.svg" />
         <Paragraph text="Batallas" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/espada.svg" />
         <Paragraph text="Juegos de mesa" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/recreativo1.svg" />
          <Paragraph text="Construccion" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/castillo.svg" />
          <Paragraph text="Cartas" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/cartas.svg" />
          <Paragraph text="Casino" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/dados.svg" />
          <Paragraph text="Diseño" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/regla.svg" />
         <Paragraph text="Partidos" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/formas.svg" />
         <Paragraph text="Fusion" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/cuadrados.svg" />
         <Paragraph text="Rompecabezas" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/rompecabezas.svg" />
         <Paragraph text="Partidas rapidas" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/cronometro.svg" />
         <Paragraph text="Juegos de preguntas" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/pregunta.svg" />
         <Paragraph text="Carreras" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/bandera.svg" />
          <Paragraph text="Juegos de rol" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/casco.svg" />
          <Paragraph text="Correr" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/correr.svg" />
          <Paragraph text="Simulacion" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/simulacion.svg" />
          <Paragraph text="Solitario" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/solitario.svg" />
          <Paragraph text="Deportes" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/deportes.svg" />
          <Paragraph text="Palabras" IconContainerCustomClass={styles.SegundaFila__Div_Img} ParagraphContainerCustomClass={styles.SegundaFila__Div} customClass={styles.SegundaFila__Text} iconCustomClass={styles.SegundaFila__Img} iconPath="/palabras.svg" />
        </div>
        
        </div>  
       
      </div>
    </div>
  )
}

export default LeftGameMain
