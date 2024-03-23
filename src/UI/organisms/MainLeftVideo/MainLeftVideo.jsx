import HeadingVideo from '../../atoms/HeadingVideo/HeadingVideo'
import IconVideo from '../../atoms/IconVideo/IconVideo'
import ParagraphVideo from '../../atoms/ParagraphVideo/ParagraphVideo'
import InputVideo from '../../atoms/InputVideo/InputVideo'
import styles from './MainLeftVideo.module.css'


const MainLeftVideo = () => {



    return(

        <>
        <header className={styles.MainLeft__Header}></header>
            <div className={styles.MainLeft}>
                <div className={styles.MainLeft__Primerafila_Container}>
                   <HeadingVideo customClass={styles.MainLeft__Title_Video} text={'Vídeo'}/>
                    <IconVideo customClass={styles.MainLeft__ConfigImg} path={'/config.svg'} />
                </div>
                
                    <InputVideo customClass={styles.MainLeft__Input} path={'/lupa.svg'} placeH={'Buscar...'}/>
                    <div className={styles.MainLeft__Paragraph_Container}>
                        <ParagraphVideo customClass={styles.MainLeft__Paragraph} path={'/camera.svg'} text='Inicio'/>
                        <ParagraphVideo customClass={styles.MainLeft__Paragraph} path={'/reels.svg'} text='Directo'/>
                        <ParagraphVideo customClass={styles.MainLeft__Paragraph} path={'/cinema.svg'} text='Reels'/>
                        <ParagraphVideo customClass={styles.MainLeft__Paragraph} path={'/video.svg'} text='Programas'/>
                        <ParagraphVideo customClass={styles.MainLeft__Paragraph} path={'/rocket.svg'} text='Explorar'/>
                        <ParagraphVideo customClass={styles.MainLeft__Paragraph} path={'/saved.svg'} text='Videos guardados'/>
                    </div>

            </div>
        
        </>


    )
}



export default MainLeftVideo;
/*Aqui se hizo commit en la rama que cree */