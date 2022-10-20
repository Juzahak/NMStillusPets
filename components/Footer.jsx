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
        <div className={styles.item2}>
        <Image src="/img/NMLogo.png" width="250px" height="250px" alt="" />
      </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LOCAL DO ATELIÊ</h1>
          <div className={styles.text}>
           
            Rua José Pedroso de Lima Filho 161, 
            <br /> Nova Serra Negra
            <br /> Serra Negra - SP, 13930-000 
            <br />Contato: (19) 97115-6832
          </div>
         
        </div>
        
        <div>
        
        <div className={styles.maps}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.7328644591407!2d-46.739016784548284!3d-22.626448633617276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c918a7b1156d4d%3A0xab22a23fb3d2d88b!2sAv.%20Jose%20Pedroso%20de%20Lima%20Filho%20-%20Lot.%20Nova%20Serra%20Negra%2C%20Serra%20Negra%20-%20SP%2C%2013930-000!5e0!3m2!1spt-BR!2sbr!4v1665949419147!5m2!1spt-BR!2sbr" width={400} height={450} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
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
