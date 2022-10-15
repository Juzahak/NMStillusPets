import { useState } from "react";
import styles from "../public/styles/Finalizado.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Footeradmin from "./Footeradmin";

const Finalizado = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);

  

  const handleDelete = async (id) => {
    
    try {
      const res = await axios.delete(
        "/api/orders/" + id
      );
      setOrderList(orderList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.central}>
    <div className="col-lg-12 d-flex h-100 justify-content-between flex-column">
    <div className={styles.container}>
      <div className={styles.wrapper}>
    <h1 className={styles.title2}>Finalizados</h1>
        <table className={styles.table}>
        <tbody>
            <tr>
              <th>CLIENTE</th>
              <th>PRODUTOS</th>              
              <th>TOTAL</th>
              <th>MÉTODO/TROCO</th>
              <th>DATA</th>
              
            </tr>
          </tbody>
          
          {orders.map((order, Index) => (
            order.status == 3 ?
            

              
              <tbody key={Index} className={styles.tbTitle}>
                
                <tr className={styles.trTitle}>
                  <td className={styles.tdTitle}>{order.customer}, {order.telefone}</td>
                  <td className={styles.tdTitle}>
                    {order.produto.map((sla, Index) =>
                        <span className={styles.spanTitle} key={Index}>{sla.title}, </span>
                    )}
                  </td>
                  <td className={styles.tdTitle}>R${order.total.toFixed(2)}</td>
                  <td className={styles.tdTitle}>
                    {order?.metodo === 1 ? <span>Dinheiro/Cartão (R${order?.troco.toFixed(2)})</span> : <span>Mercado Livre</span>}
                  </td>
                  
                  <td className={styles.tdTitle}>
                   {order.createdAt.slice(0,19)}
                  </td>
                  <td>
                  <button className={styles.delete} onClick={() => handleDelete(order._id)}>Deletar</button>

                  </td>
                </tr>
              
              </tbody>
             
            
                      :
                      <tfoot key={Index}></tfoot>
          ))}
          
        </table>
        </div>
    </div>
    <Footeradmin />
    </div>
    </div>
  )

  };

  

export default Finalizado