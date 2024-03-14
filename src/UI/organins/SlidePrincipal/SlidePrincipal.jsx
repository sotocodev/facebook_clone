import Img from '../../atoms/Img/Img';
import CardHistory from '../../molecules/Cards/CardHistory/CardHistory';
import styles from './SlidePrincipal.module.css';
import { useRef, useEffect, useState } from 'react';

const SlidePrincipal = () => {
    const RefSlide = useRef(null);
    const [push, setPush] = useState(0);

    const perfil = '/profile.jpg';
    const wallpaper = '/history.jpg';

    useEffect(() => { if (RefSlide) RefSlide.current.scrollLeft = push }, [push]);

    return (
        <div className={`${styles.SlidePrincipal}`}>
            <div className={`${styles.SlidePrincipal__Controls}`}>
                { push > 200 ? <button onClick={()=>setPush(push-350)}><Img path={'/ArrowToLeft.svg'} customClass={`${styles.Arrow}`} /></button> : <span></span> }
                <button className={`${styles.SlidePrincipal__Controls_Btn}`} onClick={()=>setPush(push+350)}><Img path={'/ArrowToRight.svg'} customClass={`${styles.Arrow}`} /></button>
            </div>
            <div ref={RefSlide} className={`${styles.SlidePrincipal__Slide}`}>
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre1 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre2 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre3 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre4 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre5 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre6 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre7 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre8 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre9 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre10 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre11 Apellido'} />
                <CardHistory pathHistory={wallpaper} pathProfile={perfil} name={'Nombre12 Apellido'} />
            </div>
        </div>
    )
}


export default SlidePrincipal;
