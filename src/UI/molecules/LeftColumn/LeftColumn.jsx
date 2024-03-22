import IconText from "../../atoms/IconText/IconText";
import styles from './LeftColumn.module.css'
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Divider from "../../atoms/Divider/Divider";

const LeftColumn = () => {
    return (
        <div  className={styles.LeftColumn}>
            <IconText iconPath="/Gokupelon.jpeg" text='GokuPelon' />
            <IconText iconPath="/amigos.png" text='Amigos' />
            <IconText iconPath="/group.png" text='Grupos' />
            <IconText iconPath="/pagina.jpg" text='Páginas' />
            <IconText iconPath="/recuerdos.png" text='Recuerdos' />
            <IconText iconPath="/guardado.jpg" text='Guardado' />
            <IconText iconPath="/Ver.png" text='Ver más' />
            <Divider/>
            <Paragraph text="Tus accesos directos" customClass={LeftColumn}/>
            <IconText iconPath="/angry.jfif" text="Angri Birds" styleVariant="shortcut"/>
            <IconText iconPath="/Gokupelon.jpeg" text="Dragon Ball" styleVariant="shortcut"/>
            <IconText iconPath="/CriminalCase.jfif" text="Criminal Case" styleVariant="shortcut"/>
            <IconText iconPath="/downtown.jpg" text="Downtown Mafia" styleVariant="shortcut"/>
            <IconText iconPath="/farm.png" text="FarmVille 2" styleVariant="shortcut"/>
            <IconText iconPath="/Ver.png" text='Ver más' />


            
        </div>
    )
}

export default LeftColumn;