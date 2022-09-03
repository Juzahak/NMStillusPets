import styles from "../public/styles/dropdown.module.css";
import { useState } from "react";
import ReactDOM from 'react-dom'
import Image from "next/image";

function Dropdown({ select, setSelect, price, setPrice, pedidinho }) {
    const [ativo, setAtivo] = useState(false);
    const opcoes = [
        {
            bairro: 'Home',
            destino: '/',
        },
        {
            bairro: 'Produtos',
            destino: '/produtos/[id].jsx',
        }, {
            bairro: 'Pedido',
            destino: `${pedidinho}`,
        }];
    const frete = [8, 5, 7];
    
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <div className={styles.dropBtn} onClick={(e) => setAtivo(!ativo)}>{select}
                    <Image src="/img/Tbars.png" alt="" width="70px" height="70px" />
                </div>
            </div>
            {ativo && (

                <div className={styles.dropCont}>
                    {opcoes.map((opt) => 
                        <span key={opt.bairro}>
                        <div  className={styles.dropsItem}>
                           <a href={opt.destino}> {opt.bairro}</a>
                            
                        </div>
                        </span>
                    )}

                </div>
            )}
        </div>
    )
}

export default Dropdown