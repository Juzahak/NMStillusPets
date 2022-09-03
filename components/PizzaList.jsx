import styles from "../public/styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
import Pratododia from "./Pratododia"
import useSwr, {isValidating} from 'swr'
import axios from 'axios'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PizzaList = ({ pizzaList, lista, verdade }) => {

  
  
  
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 1)
      }
      if(direction==="r"){
          setIndex(index !== 1 ? index+1 : 0)
      }
  }
  
  


  
console.log(name);

  
  
  return (
    <div className={styles.realcontainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            pizza.refri == false ?
              <Pratododia key={pizza._id} pizza={pizza} />
              :
              <span key={pizza._id}></span>
          ))}
        </div>
      </div>
      
      


      <div className={styles.container}>
        
      {lista.map((listt) => (
        <div key={listt.list}>
        
          <h1 className={styles.title} key={listt._id}>{listt.list}</h1>
          
        <div className={styles.wrapper2} style={{transform:`translateX(${-100*index}vw)`}}>
          {pizzaList.map((pizza) => (

            pizza.refri == true && pizza.listName === listt.list ?
              <PizzaCard key={pizza._id} pizza={pizza} />
              :
              <span key={pizza._id}></span>
          ))}
        </div>
        <div className={styles.arrows}>

        <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" width="120px" height="120px"/>
      </div>
            
            <Link href="/produtos/[id].jsx" passHref >
              <div className={styles.vertodos}>VER TODOS</div>
            </Link>
        <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" width="120px" height="120px" alt=""/>
      </div>
        </div>
        </div>
      ))}
      
      </div>
    </div>
  );
};

export default PizzaList;
