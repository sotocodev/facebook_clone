import SlidePricipal from '../SlidePrincipal/SlidePrincipal';
// import ImgPublicate from '../../molecules/ImgPublicate/ImgPublicate';
// import PublicateNicknameBar from '../../molecules/PublicateNicknameBar/PublicateNicknameBar';
// import PublicateOptionsBar from '../../molecules/PublicateOptionsBar/PublicateOptionsBar';
import PublicationBar from '../../molecules/PublicationBar/PublicationBar';
import PublicateBox from '../PublicateBox/PublicateBox';
import styles from './PublicateZone.module.css';

function PublicateZone({ customClass }) {
  return (
    <section className={`${styles.PublicateZone} ${customClass}`}>
      <SlidePricipal />
      <div className={styles.PublicateZone__Div_PublicBar}>
        <PublicationBar />
      </div>
      <div className={styles.PublicateZone__Div_PublicZone}>
        <PublicateBox
          time="hace 2 minutos"
          seguir={false}
          nickname="GokuePelon"
          pathImg="/ImgTribute.jpg"
        />
      </div>
    </section>
  );
}

export default PublicateZone;
