import styles from './Languages.module.css'

export const Languages = () =>{
	let idiomas = ["Español", "മലയാളം", "English (UK)", "اعربية  ",  
	"中文(简体)", "Italiano", "Français", "(France)", "Português", "(Brasil)", 
	"Deutsch", "हिन्दी", "日本語"
	]

	return(
		<ul className={styles.Estilo_Idiomas}>
			{idiomas.map((idioma, index) => (<li key={index} language="idiomas"> {idioma} </li>))}
		</ul>
		)
}
export default Languages;