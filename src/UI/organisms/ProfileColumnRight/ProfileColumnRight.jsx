import React from 'react'
import PublicationBar from '../../molecules/PublicationBar/PublicationBar'
import PublicateBox from '../PublicateBox/PublicateBox'
import styles from './ProfileColumnRight.module.css'
import PostDisplay from '../PostDisplay/PostDisplay'
function ProfileColumnRight() {


return(
    <>
    
    <div className={styles.ProfieContentainer}>



  <div className={styles.ProfieContent}>


    <div className={styles.fullwidth}>
     <PublicationBar customClass={`${styles.fullwidth_bar}`}/> 
     <PostDisplay/>
    <PublicateBox customClassBox={styles.responsiveBox}/>
      <PublicateBox customClassBox={styles.responsiveBox}/>
      <PublicateBox customClassBox={styles.responsiveBox}/> 

    </div>
  </div>
</div>
    </>
)

}
export default ProfileColumnRight