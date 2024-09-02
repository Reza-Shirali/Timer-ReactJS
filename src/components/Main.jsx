import React, { useEffect, useState } from "react";

import styles from "./Main.module.css";

function Main() {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(59);

  useEffect(() => {
    const timer = () => {
      if (sec > 0) {
        setSec((sec) => sec - 1);
      } else if (sec === 0) {
        if (min > 0) {
          setMin((min) => min - 1);
          setSec(59);
        }
      }
    };

    const timerInterval = setInterval(timer, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [min, sec]);

  return (
    <>
      <div className={styles.main}>
        <p>Timer</p>
        <div className={styles.timer}>
          <span className={styles.min}>{min < 10 ? `0${min}` : min}</span>
          <span> : </span>
          <span className={sec % 2 === 0 ? styles.even : styles.odd}>
            {sec < 10 ? `0${sec}` : sec}
          </span>
        </div>
        <h2>Reza Shirali | ReactJS</h2>
      </div>
    </>
  );
}

export default Main;
