import CardHistory from '../../molecules/Cards/CardHistory/CardHistory';
import styles from './SlidePrincipal.module.css';
import { useRef, useEffect, useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const perfil = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
const wallpaper = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRbZbkhT3GNPpYYrzDk36V-dhPcmB6MdccFbx9wDhig&s';

// <CardHistory history={wallpaper} photo={perfil} name={'Nombre Apellido'} />

const SlidePrincipal = () => {
    const RefSlide = useRef(null);
    const [push, setPush] = useState(0);

    useEffect(() => {
        if (RefSlide) {
            console.log(push);
            RefSlide.current.scrollLeft = push;
        }
    }, [push]);

    return (
        <>
            <div className={`${styles.ContainerSlide}`}>
                <div className={`${styles.SlideControls}`}>
                    { push > 200 ? <button onClick={()=>setPush(push-350)}><BsArrowLeftCircle /></button> : <span></span> }
                    <button onClick={()=>setPush(push+350)}><BsArrowRightCircle /></button>
                </div>
                <div ref={RefSlide} className={`${styles.Slide}`}>
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre1 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre2 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre3 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre4 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre5 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre6 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre7 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre8 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre9 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre10 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre11 Apellido'} />
                    <CardHistory history={wallpaper} photo={perfil} name={'Nombre12 Apellido'} />
                </div>
            </div>
        </>
    )
}


export default SlidePrincipal;
