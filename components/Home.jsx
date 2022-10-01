import styles from "../public/styles/Admin.module.css";
import Image from "next/image";

const Home = ({ setClose }) => {
  return (
    <div className={styles.homee}>
    <div className="col-lg-12 mt-5 text-center">
        <h1>Painel Administrativo</h1>
        <h2>Seja Bem vindo.</h2>
        <br></br>
        <br></br>
        <br></br>
        <h3>Loja: NM Stillus Moda em Roupas Pet</h3>
    </div>
    </div>
  );
};

export default Home;