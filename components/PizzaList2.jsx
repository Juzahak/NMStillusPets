import styles from "../public/styles/PizzaList2.module.css";
import PizzaCard from "./PizzaCard2"
import Pratododia from "./Pratododia"
import useSwr, {isValidating} from 'swr'
import axios from 'axios'
import { useEffect, useState } from "react";
import Image from "next/image";

const PizzaList2 = ({ pizzaList, lista, verdade }) => {

  
  
  
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("Estilizadas");
  

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 1)
      }
      if(direction==="r"){
          setIndex(index !== 1 ? index+1 : 0)
      }
  }
  
  


  
console.log(lista[0]);

  
  
  return (
    <div className={styles.realcontainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            pizza.refri == false ?
              <Pratododia key={pizza._id} pizza={pizza} verdade={verdade}/>
              :
              <span key={pizza._id}></span>
          ))}
        </div>
      </div>
      
      {verdade && 
      <div className={styles.menus}>
      {lista.map((listtt) => 
    
     <button key={listtt._id} className={styles.menu} onClick={(e) => setName(listtt.list)}>{listtt.list}</button>
    
     )}
     </div>
      }


      <div className={styles.container}>
        
      {lista.map((listt) => (
        name === listt.list ?
        <div key={listt._id} className="col-12">
          <h1 className={styles.title}>{listt.list}</h1>
          
        <div className={styles.wrapper2}>
          {pizzaList.map((pizza) => (

            pizza.refri == true && pizza.listName === listt.list?
              <PizzaCard key={pizza._id} pizza={pizza} />
              :
              <span key={pizza._id}></span>
          ))}
        </div>
        
        </div>
      :
      <span key={listt._id}></span>
    
      ))}
      </div>
    </div>
  );
};

export default PizzaList2;