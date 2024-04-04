import { useState } from "react";
import ImgSubTitle from "../../molecules/ImgSubTitle/ImgSubTitle";
import styles from "./OpDeUsuario.module.css";
const OpDeUsuario = () => {
  const [VerMas, setVerMas] = useState(false);
  const VerMenosOp = VerMas ? styles.MasOpcionesOn : styles.MasOpcionesOff;
  const VerManOp = VerMas ? styles.MasOpcionesOff : styles.MasOpcionesOn;

  const eventoMas = () => {
    setVerMas(!VerMas);
  };

  return (
    <div className={styles.OpDeUsuario}>
      <ImgSubTitle
        Text="Usuario"
        customClassSubTittle={styles.OpDeUsuario__SubTitle}
        path="https://www.svgrepo.com/show/490949/people.svg"
        customClassImg={styles.OpDeUsuario__Img}
      />
      <ImgSubTitle
        Text="Amigos"
        customClassSubTittle={styles.OpDeUsuario__SubTitle}
        path="https://www.svgrepo.com/show/483881/friend-3.svg"
        customClassImg={styles.OpDeUsuario__Img}
      />
      <ImgSubTitle
        Text="Recuerdos"
        customClassSubTittle={styles.OpDeUsuario__SubTitle}
        path="https://www.svgrepo.com/show/530409/time.svg"
        customClassImg={styles.OpDeUsuario__Img}
      />
      <ImgSubTitle
        Text="Guardado"
        customClassSubTittle={styles.OpDeUsuario__SubTitle}
        path="https://cdn-icons-png.freepik.com/256/2314/2314474.png?ga=GA1.1.1579853963.1707498716&"
        customClassImg={styles.OpDeUsuario__Img}
      />
      <ImgSubTitle
        Text="Grupos"
        customClassSubTittle={styles.OpDeUsuario__SubTitle}
        path="https://cdn-icons-png.freepik.com/256/7762/7762305.png?ga=GA1.1.1579853963.1707498716&"
        customClassImg={styles.OpDeUsuario__Img}
      />
      <ImgSubTitle
        Text="Video"
        customClassSubTittle={styles.OpDeUsuario__SubTitle}
        path="https://cdn-icons-png.freepik.com/256/4240/4240142.png?ga=GA1.1.1579853963.1707498716&"
        customClassImg={styles.OpDeUsuario__Img}
      />
      <ImgSubTitle
        onclick={eventoMas}
        Text="Ver mas"
        customClassSubTittle={styles.OpDeUsuario__SubTitle}
        path="https://cdn-icons-png.freepik.com/256/5049/5049821.png?ga=GA1.1.1579853963.1707498716&"
        customClassImg={styles.OpDeUsuario__Img}
        customClass={VerManOp}
      />
      <section className={VerMenosOp}>
        <ImgSubTitle
          Text="Actividad publicitaria reciente"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/4679/4679837.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Administrador de anuncios"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/9410/9410891.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Clima:Centro de informacion"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/3127/3127312.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Eventos"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/591/591567.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Feeds"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/15058/15058100.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Jugar"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/1508/1508065.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Messenger"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/5968/5968771.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Messenger Kids"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/1377/1377985.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Paginas"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/1218/1218444.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Pedidos y pagos"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/5445/5445107.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Recaudaciones de fondos"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/1378/1378717.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Videos de juego"
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/3959/3959330.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
        <ImgSubTitle
          Text="Ver menos"
          onclick={eventoMas}
          customClassSubTittle={styles.OpDeUsuario__SubTitle}
          path="https://cdn-icons-png.freepik.com/256/12326/12326272.png?ga=GA1.1.1579853963.1707498716&"
          customClassImg={styles.OpDeUsuario__Img}
        />
      </section>
    </div>
  );
};

export default OpDeUsuario;
