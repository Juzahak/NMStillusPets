import Image from "next/image";
import styles from "../public/styles/Pratododia.module.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';


const Pratododia = ({ pizza, verdade }) => {


  return (
    <div className={styles.container}>
      {!verdade &&
      <h1 className={styles.titulomob}>Sejam Bem Vindos ao nosso Atelie!</h1>
      }
      <div className={styles.imgg}>
        <Link href={`/product/${pizza._id}`} passHref>
          <a>

          <Image src={pizza.img} alt="" width="550" height="500" />
          </a>
        </Link>
      </div>

      <div className={styles.apresentacao}>
        <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image src="/img/ornamentosuperior.png" alt="" width="526" height="100" />
          </a>
          </Link>
          <div className={styles.titext}>
            <Link href={`/product/${pizza._id}`} passHref>
            <a className={styles.titleadd}>
              <span className={styles.title}>{pizza.title}</span>
              </a>
              </Link>
              <Link href={`/product/${pizza._id}`} passHref>
              <a className="text-decoration-none p-3">
              <span className={styles.price}>A partir de R${pizza.prices[0]}.00</span>
              </a>
              </Link>
              <div className={styles.titext2}>
                <Link href={`/product/${pizza._id}`} passHref>
                <a className="text-decoration-none text-dark">
                  <h2 className={styles.desc}>
                    Venha conhecer nosso Atelie,
                  </h2>
                  </a>
                  </Link>
                  <Link href={`/product/${pizza._id}`} passHref>
                  <a className="text-decoration-none text-dark">
                  <h2 className={styles.desc}>
                    N&M Stillus Pets
                  </h2>
                  </a>
                  </Link>
                  <Link href={`/product/${pizza._id}`} passHref>
                  <a className="text-decoration-none text-dark">
                  <h2 className={styles.desc}>
                    Criando para você!      </h2>
                    </a>
                </Link>
              </div>
          </div>
          <Link href={`/product/${pizza._id}`} passHref>
          <a>
          <Image src="/img/ornamentoinferior.png" alt="" width="526" height="100" />
          </a>
          </Link>
      </div>
    </div>
  );
};

export default Pratododia;