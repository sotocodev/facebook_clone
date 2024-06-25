import PublicateButton from '../PublicateButton/PublicateButton';
import { useState, useRef, useEffect } from 'react';
import styles from './ButtonTo.module.css';

function ButtonTo({
  text,
  path,
  customClass,
  customClassDiv,
  iconPath,
  customClassIcon,
}) {
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef(null);

  const handleDocumentClick = (event) => {
    /*
     * warning: The ref value 'targetRef.current' will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'targetRef.current' to a variable inside the effect, and use that variable in the cleanup function
     */
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleButtonClick = (event) => {
      if (targetRef.current && targetRef.current !== event.target) {
        setIsActive(false);
      }
    };

    if (targetRef.current) {
      targetRef.current.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (targetRef.current) {
        targetRef.current.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  return iconPath ? (
    <button
      ref={targetRef}
      onClick={handleClick}
      className={`${styles.ButtonTo} ${customClass}`}
    >
      <div className={`${styles.ButtonTo__Div} ${customClassDiv}`}>
        <span className={styles.ButtonTo__Div_span}>
          <PublicateButton
            customClass={
              isActive ? styles.ButtonTo__IconColor : styles.ButtonTo__IconMax
            }
            customClassIcon={customClassIcon}
            path={iconPath}
          />
          {text}
        </span>
      </div>
    </button>
  ) : (
    <button className={`${styles.ButtonTo} ${customClass}`}>
      <div className={`${styles.ButtonTo__Div} ${customClassDiv}`}>
        <span className={styles.ButtonTo__Div_span}>
          <img className={styles.ButtonTo__Div_Img} src={path} />
          {text}
        </span>
      </div>
    </button>
  );
}

export default ButtonTo;
