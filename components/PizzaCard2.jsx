import Image from "next/image";
import styles from "../public/styles/PizzaCard2.module.css";
import Link from "next/link";

const PizzaCard = ({pizza}) => {
  
  return (
    <div className={styles.container}>
        
      <div className={styles.imagefood}>
      <Link href={`/product/${pizza._id}`} passHref>
      <a>
      <Image src={pizza.img} alt="" width="300" height="400" />
      </a>
      </Link>
      </div>
      
      <div className={styles.arrumador}>
        {pizza.title.length > 17 ?
      <Link href={`/product/${pizza._id}`} passHref>
      <a>
      <h1 className={styles.title}>{pizza.title.slice(0, 17)}...</h1>
      </a>
      </Link>
      :
      <Link href={`/product/${pizza._id}`} passHref>
      <a>
      <h1 className={styles.title}>{pizza.title}</h1>
      </a>
      </Link>
      }
      <div className={styles.price}>Tamanhos: 
      {pizza.extraOptions.map((tam) => 
        <a className={styles.price} key={tam}><span className={styles.price}>
           -{tam.text}
          </span></a>
      )}
      </div>



      <Link href={`/product/${pizza._id}`} passHref>
      <a className={styles.price}>
      <span className={styles.price}>R$ {pizza.prices[0]}.00</span>
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
