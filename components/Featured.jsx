import styles from "../public/styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/foto1.jpeg",
    "/img/foto2.jpg",
    "/img/foto3.jpg",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <section id="page-title" className={styles.estilo}>

    <div className="container clearfix dark">
      
    </div>

  </section>
  );
};

export default Featured;