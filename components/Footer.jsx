import Image from "next/image";
import styles from "../public/styles/Footer.module.css";
import Gmaps from "./Gmaps"


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/dognoemi.jpeg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Obrigado por visitar nosso ateliê,
            <br />
            <br />
             Nossa alegria é transformar sonhos em realidade!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LOCAL DO ATELIÊ</h1>
          <div className={styles.text}>
           
            Rua José Pedroso de Lima Filho 161, 
            <br /> Nova Serra Negra
            <br /> Serra Negra - SP,
            <br /> 13930-000 
            <br /> (XX) XXXXX-XXXX
          </div>
         
        </div>
        
        <div>
        <Gmaps />

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ABERTO ÁS:</h1>
          <div className={styles.text}>
          Segunda á sexta: <br /> 08:00 às 20:00
            
          </div>
          <div className={styles.text}>
          Sábado: <br /> 08:00 às 15:00         
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
