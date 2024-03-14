import styles from './Link.module.css'

export const Link = ({url, nombre}) =>{
	return(
		<a href = {url}>{nombre}</a>
	)
}
export default Link;