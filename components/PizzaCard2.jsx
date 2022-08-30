import Image from "next/image";
import styles from "../public/styles/PizzaCard2.module.css";
import Link from "next/link";

const PizzaCard = ({pizza}) => {
  
  return (
    <div className={styles.container}>
        
      <div className={styles.imagefood}>
      <Link href={`/product/${pizza._id}`} passHref>
      <a>
      <Image src={pizza.img} alt="" width="240" height="340" />
      </a>
      </Link>
      </div>
      <Link href={`/product/${pizza._id}`} passHref>
      <a>
      <h1 className={styles.title}>{pizza.title}</h1>
      </a>
      </Link>
      <Link href={`/product/${pizza._id}`} passHref>
      <a className={styles.price}>
      <span className={styles.price}>R$ {pizza.prices[0]}.00</span>
      </a>
      </Link>
      <Link href={`/product/${pizza._id}`} passHref>
      <div className={styles.comprar}>Adicionar</div>
      </Link>
      
    </div>
  );
};

export default PizzaCard
