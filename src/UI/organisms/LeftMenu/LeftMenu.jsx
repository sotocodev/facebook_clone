import LeafMenuBar from '../../molecules/LeafMenuBar/LeafMenuBar';
import LeafMenuButtons from '../../molecules/LeafMenuButtons/LeafMenuButtons';
import styles from './LeftMenu.module.css';

function LeftMenu({ customClassBox }) {
  return (
    <div className={`${styles.LeftMenu} ${customClassBox}`}>
      <LeafMenuBar />
      <LeafMenuButtons />
    </div>
  );
}

export default LeftMenu;
