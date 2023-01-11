import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Animal from "./Components/Animal/Animal";
import ImageGen from "./Components/Image/ImageGen";

export default function Home() {
  const [swi, setswi] = useState(false);
  var switchDiv =()=> {
    setswi(!swi);
  }
  return (
    <div style={{margin:'auto', textAlign:'center'}} >
      <button onClick={switchDiv} className={styles.switch}>Switch</button>
      
      {
        swi ? <Animal/> : <ImageGen/>
      }
    </div>
  );
}
