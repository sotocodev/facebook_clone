import styles from './Extras.module.css'

export const Extras = () =>{
	let extras = [
		"Registrarte", "Iniciar sesión", "Messenger", "Facebook Lite", "Video", "Lugares",
    	"Juegos", "Marketplace", "Meta Pay", "Meta Store", "Meta Quest", "Imagina con Meta AI",
    	"Instagram", "Threads", "Recaudaciones de fondos", "Servicios", "Centro de información de votación",
    	"Política de privacidad", "Centro de privacidad", "Grupos", "Información", "Crear anuncio",
    	"Crear página", "Desarrolladores", "Empleo", "Cookies", "Opciones de anuncios", "Condiciones",
    	"Ayuda", "Subir contactos y no usuarios", "Configuración", "Registro de actividad"
    	];
	return(
		<ul className={styles.Estilos_Extras}>
			{extras.map((extra, index) => (<li key={index} language="extras"> {extra} </li>))}
		</ul>
	)
}
export default Extras;