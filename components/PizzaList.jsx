import styles from "../public/styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
import Pratododia from "./Pratododia"
import useSwr, {isValidating} from 'swr'
import axios from 'axios'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        
      {lista.slice(0, 2).map((listt) => (
        <div key={listt._id}>
        
          <h1 className={styles.title} key={listt._id}>{listt.list}</h1>
          
        <div className={styles.wrapper2} >
          {pizzaList.map((pizza) => (

            pizza.refri == true && pizza.listName === listt.list ?
            <div className="col-6 col-md-4 col-sm-5 col-lg-3">
              <PizzaCard key={pizza._id} pizza={pizza} />

            </div>
              :
              <span key={pizza._id}></span>
          ))}
        </div>
        <div className={styles.arrows}>

       
            
        
        </div>
        </div>
      ))}
      
            <Link href="/produtos/[id].jsx" passHref >
              <div className={styles.vertodos}>VER TODOS</div>
            </Link>
      </div>
    </div>
  );
};

export default PizzaList;
