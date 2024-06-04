import React from 'react'
import CardOfElements from '../../molecules/CardOfElements/CardOfElements'
import ProfileIntro from '../../molecules/ProfileIntro/ProfileIntro'
import styles from "./ProfileColumnLeft.module.css"

function ProfileColumnLeft() {
    const friendsData = [
        { image: 'https://picsum.photos/50/50', name: 'Amigo 1' },
        { image: 'https://picsum.photos/50/51', name: 'Amigo 2' },
        { image: 'https://picsum.photos/50/52', name: 'Amigo 3' },
        { image: 'https://picsum.photos/50/53', name: 'Amigo 4' },
        { image: 'https://picsum.photos/50/53', name: 'Amigo 5' },
        { image: 'https://picsum.photos/50/53', name: 'Amigo 6' },
        { image: 'https://picsum.photos/50/53', name: 'Amigo 7' },
        { image: 'https://picsum.photos/50/53', name: 'Amigo 8' },
        { image: 'https://picsum.photos/50/53', name: 'Amigo 9' },
      ];
    
      const photosData = [
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
        'https://picsum.photos/50/53',
      ];
  return (
    <>

  
           <div className={styles.ProfileContent_rightSide}>
           <ProfileIntro/>

            <CardOfElements type="photos" data={photosData} />
            <CardOfElements type="friends" data={friendsData} />
          </div>
    </>
  )
}

export default ProfileColumnLeft