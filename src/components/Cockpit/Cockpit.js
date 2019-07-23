import React, { useEffect, useRef, useContext } from "react";
import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

function Cockpit(props) {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    // setTimeout(() => {
    //   alert("Save data to cloud");
    // }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2 useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const classes = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(styles.red);
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }
  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked} ref={toggleBtnRef}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>;
    </div>
  );
}

export default React.memo(Cockpit);
