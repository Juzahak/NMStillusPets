import Image from "next/image";
import styles from "../public/styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({pizza}) => {

  console.log(pizza)

  return (
    <div className={styles.container}>
        
      <div className={styles.imagefood}>
      <Link href={`/product/${pizza._id}`} passHref>
      <a>
      <Image src={pizza.img} alt="" width="300" height="400"/>
      </a>
      </Link>
      </div>
      <div className={styles.arrumador}>
      
      <Link href={`/product/${pizza._id}`} passHref>
      <a className="text-decoration-none">
      <h1 className={styles.title}>{pizza.title}</h1>
      </a>
      </Link>
      
      
      <Link href={`/product/${pizza._id}`} passHref>
      <a className={styles.price}>
      <span className={styles.price}>A partir de: R$ {pizza.prices[0].toFixed(2)}</span>
      </a>
      </Link>
      </div>
      <Link href={`/product/${pizza._id}`} passHref>
      <div className={styles.comprar}>Adicionar</div>
      </Link>
      
   </div> 
  );
};

export default PizzaCard
