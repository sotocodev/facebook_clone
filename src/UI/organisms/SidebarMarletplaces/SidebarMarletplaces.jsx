import Heading from "../../atoms/Heading/Heading";
import Icon from "../../atoms/Icon/Icon";
import Input from "../../atoms/Input/Input";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import styles from "./SidebarMarletplaces.module.css";

const SidebarMarletplaces = () => {
  return (
    <div className={styles.SidebarMarletplaces}>
      <div className={styles.SidebarMarletplaces__MarketplacesContainer}>
        <div className={styles.SidebarMarletplaces__TitleIconContainer}>
          <Heading
            text="MarketPlace"
            customClass={styles.SidebarMarletplaces__Title}
          />
          <Icon
            path="/Share.svg"
            customClass={styles.SidebarMarletplaces__Icon}
          />
        </div>
        <Input
          iconPath="/Share.svg"
          iconPathCustomClass={styles.SidebarMarletplaces__IconSearch}
          type="search"
          placeholder="Buscar en marketplaces"
        />
      </div>

      <div className={`${styles.SidebarMarletplaces__TitleIconContainer} ${styles.SidebarMarletplaces__TitleIconContainer_Arrow}`}>
        <Icon
          path="/Share.svg"
          customClass={styles.SidebarMarletplaces__Icon}
        />
        <Paragraph
          text="Explorar todo"
          customClass={styles.SidebarMarletplaces__Paragraph}
        />
      </div>
      {/* Acomoda lo demas */}
      <div className="search-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Buscar en Marketplace" />
      </div>
      <div className="imgm">
        <i class="fa-solid fa-store"></i>
        <p>Explorar todo</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-bell"></i>
        <p>Notificaciones</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-inbox"></i>
        <p>Bandeja de entrada</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Compra</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-tag"></i>
        <p>Venta</p>
      </div>
      <div className="button">
        <button>+ Crear publicacion</button>
      </div>
      <hr />
      <div className="filtro">
        <h3>Filtros</h3>
      </div>
      <div className="imga">
        <p>Atenas, Alejuela En un radio de 6 kilometros</p>
      </div>
      <hr />
      <div className="categoria">
        <h3>Categoria</h3>
      </div>
      <div className="img">
        <i class="fa-solid fa-car"></i>
        <p>Vehiculos</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-house"></i>
        <p>Alquiler de propiedades</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-person-running"></i>
        <p>Articulos deportivos</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-tags"></i>
        <p>Articulos gratuitos</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-tag"></i>
        <p>Articulos para el hogar</p>
      </div>
      <div className="img">
        <i class="fa-solid fa-house-chimney"></i>
        <p>Clasificados</p>
      </div>
    </div>
  );
};

export default SidebarMarletplaces;
