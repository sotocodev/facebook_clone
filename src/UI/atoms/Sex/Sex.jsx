import styles from './Sex.module.css';

export const Sex = ({ sex }) => {
  return (
    <>
      <label className={styles.Estilos_Sexo}>{sex}</label>
    </>
  );
};

export default Sex;
