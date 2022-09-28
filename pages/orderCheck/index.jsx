import styles from "../../public/styles/Order.module.css";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const orderCheck = () => {
    

    return (
        <>
        <Navbar />
        <div className={styles.checkcheck}>Por gentileza realize um pedido!</div>
        <div className={styles.checkcheck}>Caso ja tenha realizado, volte e atualize a pagina!</div>
        <div className={styles.checkcheck}>Obrigado!</div>
        <Footer />
        </>
    )
        
    
}

export default orderCheck


