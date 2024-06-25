import SubTitle from '../../atoms/SubTitle/SubTitle';
import Img from '../../atoms/Img/Img';
import styles from './ImgSubTitle.module.css';

const ImgSubTitle = ({
  path,
  Text,
  customClass,
  customClassImg,
  customClassSubTittle,
  onclick,
}) => {
  return (
    <div className={`${styles.ImgSubTitle} ${customClass} `} onClick={onclick}>
      <Img customClass={customClassImg} pathImg={path} />
      <SubTitle
        customClassSubTitle={`${styles.ImgSubTitle__SubTitle} ${customClassSubTittle}`}
        Text={Text}
      />
    </div>
  );
};
export default ImgSubTitle;
