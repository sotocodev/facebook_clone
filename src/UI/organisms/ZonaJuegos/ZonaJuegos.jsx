import LeftGameMain from '../../molecules/LeftGameMain/LeftGameMain';
import TarjetaJuego from '../../molecules/TarjetaJuego/TarjetaJuego';
import Title from '../../atoms/Title/Title';
import styles from './ZonaJuegos.module.css';

const ZonaJuegos = () => {
  return (
    <div className={styles.ZonaJuegos}>
      <div className={styles.ZonaJuegos__LeftMenu}>
        <LeftGameMain />
      </div>

      <div className={styles.ZonaJuegos__Centro}>
        <div className={styles.Centro__TituloSeccion}>
          <Title text="Sugerencias destacadas para ti" />
        </div>
        <div className={styles.Centro__FilaJuegos}>
          <TarjetaJuego
            CardsCustomClass={styles.FilaJuegos__Card1}
            CardsContainerCustomClass={styles.FilaJuegos__Card1_Container}
            text="Ludo clasico"
          />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
          <TarjetaJuego text="Ludo clasico" />
        </div>
      </div>
    </div>
  );
};

export default ZonaJuegos;
