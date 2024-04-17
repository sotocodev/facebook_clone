import React from 'react'
import styles from "./LeftMenu.module.css"
import LeafMenuBar from '../../molecules/LeafMenuBar/LeafMenuBar'
import LeafMenuButtons from '../../molecules/LeafMenuButtons/LeafMenuButtons'

function LeftMenu({customClassBox}) {
  return (
    <div className={`${styles.LeftMenu} ${customClassBox}`}>
        <LeafMenuBar/>
        <LeafMenuButtons/>
    </div>
  )
}

export default LeftMenu
