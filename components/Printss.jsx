import { useState } from "react";
import styles from "../public/styles/Printss.module.css";
import Image from "next/image";



const Printss = ({ setClose3, order, orderId }) => {
    const [ide, setId] = useState(orderId);

  
 
 
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.flexx}>
     
      <div onClick={() => setClose3(true)} className={styles.close}>
        X
      </div>
      </div>
      {order.map((pedidos, Index) => (
          pedidos._id == ide ?
          
          <div className={styles.conts} key={Index}>
            <section className={styles.notinha} id={styles.notinhaPr}>
            <div className={styles.position34}></div>
            <div className={styles.position25}>N&M Stillus Pets</div>
            <div className={styles.position4}>Dia: {pedidos.createdAt.slice(0, 10)} </div>
            <div className={styles.position4}>Hora: {pedidos.createdAt.slice(11, 16)}</div>
            <div className={styles.position4}>====================</div>
            <div className={styles.position4}>-Cliente-</div>
            <div className={styles.position4}>{pedidos.customer}</div>
            <div className={styles.position4}>Telefone: {pedidos.telefone}</div>
            <div className={styles.position4}>====================</div>

            <div className={styles.position4}>{pedidos.address}</div>
            <div className={styles.position4}>{pedidos.select}</div>
            <div className={styles.position4}>Observações:  {pedidos.obs}</div>
            <div className={styles.position4}>====================</div>
            <div className={styles.position2}>-Pedido-</div>
            {pedidos.produto.map((produtos, Index) => (
                <div key={Index}>
                    <div className={styles.position4}>{produtos.title}</div>
                    <div className={styles.position4}>Quantidade: {produtos.quantity}</div>
                    <div className={styles.position4}>Tamanho: {produtos.extras}</div>
                    
                    
                    
            <div className={styles.position4}>====================</div>
            </div>
                
                
                ))}
                <div className={styles.position4}>Sub-Total: R${pedidos.total.toFixed(2)}</div>
                <div className={styles.position4}>Tax-Entreg: R${pedidos.price.toFixed(2)}</div>
                <div className={styles.position4}>Total: R${pedidos.total.toFixed(2)}</div>
                {pedidos.metodo == 1 ?
                <div className={styles.position4}>Método: Dinheiro/Cartão</div>
                :
                <div className={styles.position4}>Método: Mercado Livre</div>
                }
                <div className={styles.position4}>Troco Para: R${pedidos.troco.toFixed(2)}</div>
                <div className={styles.position3}></div>
                <div className={styles.image}>
                <Image src="/img/NMLogo.png" alt="" width="150px" height="120px"/>
                </div>
            </section>
        </div>
            
            :
            <footer key={Index}></footer>
            
            
            ))}
          
            <div onClick={() => window.print()} className={styles.imprimirbutton}>IMPRIMIR</div>
            
      </div>
    </div>
  )

};

export default Printss;