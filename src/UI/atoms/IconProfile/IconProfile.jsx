import React from "react";
import styles from "./IconProfile.module.css"

const Img = ({text, customClass, href}) => {
  return <img className={`${styles.IconProfile} ${customClass}`} src={href} />
}

export default Img;