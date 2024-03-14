import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Date from '../../atoms/Datesan/Date';
import Sex from '../../atoms/Sex/Sex';
import Question from '../../atoms/Question/Question';
import Title from '../../atoms/Title/Title'
import Input from '../../atoms/Input/Input';
import styles from './RegisterForm.module.css'

export const RegisterForm = () =>{
	return(
		<>
		<div className={styles.Container}>
			<div className={styles.Container_Formulario}>
					<div className={styles.Cuenta_Titulo}>Crea una cuenta</div>
					<div className={styles.Cuenta_Titulo_Subtitulo}>Es fácil y rápido</div>
			</div>
			<div className={styles.Card}>
				<div className={styles.Card_Nombre}>
					<Input type="name" placeholder="Nombre"></Input>
					<Input type="name" placeholder="Apellido"></Input>
			</div>
			<div className={styles.Container_Correo}>
				<input className={styles.Container_Correo_Email} type="email" placeholder="Número de celular o correo electronico"></input>				</div>
				<input className={styles.Container_Correo_Contraseña} type="password" placeholder="Contraseña"></input>
				<Title text="Fecha de nacimiento"></Title>
				<a className={styles.Signo_Informacion_Fecha}title="Has click para obtener más información"><Question/></a>
				<span className={styles.Container_Fecha}>
					<Date/>
				</span>
				<a title="Has click para obtener más información"className={styles.Signo_Informacion_Sexo}><Question/></a>
				<Title text="Sexo"></Title>
				<span className={styles.Contenedor_Genero}>
					<Sex sex="Mujer"/>
					<input className={styles.Contenedor_Genero_Entrada} type="radio" name="genre"/>
				</span>
				<span className={styles.Contenedor_Genero}>
					<Sex sex="Hombre"/>
					<input className={styles.Contenedor_Genero_Entrada} type="radio" name="genre"/>
				</span>
				<span className={styles.Contenedor_Genero}>
					<label className={styles.Contenedor_Genero_Inclusion_Forzada}>Personalizado</label>
					<input className={styles.Contenedor_Genero_Entrada} type="radio" name="genre"/>
				</span>
				<div className={styles.Contenedor_Aviso}>
					<p className={styles.Contenedor_Aviso_Aparicion}>Es posible que las personas 
					que usan nuestro servicio hayan 
					subido tu información de contacto a Facebook.
					Obtén más información.</p>
					<p className={styles.Contenedor_Aviso_Aparicion}>Al hacer clic en "Registrarte",
					 aceptas nuestras Condiciones, 
					la Política de privacidad y la Política de cookies. Es posible 
					que te enviemos notificaciones por SMS, que puedes desactivar 
					cuando quieras.</p>
					<div className={styles.Contenedor_Registrarse}>
						<button className={styles.Contenedor_Registrarse_Boton}>Registrarse</button>
					</div>
					<div className={styles.Contenedor_TnCuenta}>
						<a className={styles.Contenedor_TnCuenta_Text}>¿Ya tienes una cuenta?</a>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}
export default RegisterForm;