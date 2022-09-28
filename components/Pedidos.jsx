import styles from "../public/styles/Admin.module.css";
import Image from "next/image";
import useSwr, { mutate } from 'swr';
import { useEffect, useState } from "react";
import Print from "./Print";
import Printss from "./Printss";


const fetcher = (url) => fetch(url).then((res) => res.json())

const Sidebar = () => {
      const {data: orders} =  useSwr(`/api/orders`, fetcher, {refreshInterval:5000});
      const {data: products} =  useSwr(`/api/products`, fetcher);
      const [Ide, setIde] = useState("");
      const [close3, setClose3] = useState(true);


      const handleStatus = async (id) => {
        const item = orders.filter((order) => order._id === id)[0];
        const currentStatus = item.status;
    
        try {
          const res = await axios.put("/api/orders/" + id, {
            status: currentStatus + 1,
          });
          mutate(`/api/orders`);
    
    
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className="col-lg-10 d-flex justify-content-center">
    <div className={styles.item}>
        <div className={styles.alinhado}>
          <h1 className={styles.title2}>PEDIDOS</h1>
          
        </div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.title}>
              <th>CLIENTE</th>
              <th>PRODUTOS</th>
              <th>TAMANHO</th>
              <th>OBS.</th>
              <th>TOTAL</th>
              <th>MÉTODO/TROCO</th>
              <th>STATUS</th>
              <th>AÇÃO</th>
            </tr>
          </tbody>

          {orders?.map((order, Index) => (
            order.status == 3 ?
              <tfoot key={Index}></tfoot>


              :


              <tbody key={Index} className={styles.tbTitle}>

                <tr className={styles.trTitle}>
                  <td className={styles.tdtTitle}>{order?.customer},
                    <div className={styles.tdt2Title}>{order?.select}</div>
                    <div className={styles.tdt2Title}>{order?.telefone}</div>
                  </td>
                  <td className={styles.tdTitle}>
                    {order?.produto.map((sla, Index) =>
                      <div key={Index}>
                        <div className={styles.spanTitle}>
                        <Image
                    src={sla?.img}
                    width={100}
                    height={160}
                    objectFit="cover"
                    alt=""
                  />
                          {sla?.title}
                        
                        </div>
                      </div>
                    )}



                  </td>

                  <td className={styles.td2Title}>
                    {order?.produto.map((sla, Index) =>
                      <div className={styles.span3Title} key={Index}>
                        {sla?.extras.map((sla2, Index) =>
                          <span key={Index}>{sla2} </span>
                        )}
                        

                      </div>
                    )}


                  </td>

                  <td className={styles.td2Title}>
                    {order?.produto.map((sla, Index) =>
                      <div className={styles.span2Title} key={Index}>
                       
                        {sla?.descri}

                      </div>
                    )}

                  </td>



                  <td className={styles.totalTitle}>R${order?.total}.00</td>
                  <td className={styles.metodoTitle}>
                    {order?.metodo === 1 ? <span>Dinheiro/Cartão ({order?.troco}R$)</span> : <span>Mercado Livre</span>}
                  </td>
                  <td className={styles.tdTitle}>
                    <div className={styles.statinho}>{status[order?.status]}</div>
                    <button className={styles.proximo} onClick={() => handleStatus(order?._id)}>
                      Próximo Passo
                    </button>
                  </td>
                  <td className={styles.tdTitle}>
                  <button onClick={() => setIde(order?._id)} className={styles.impressao2}>
                {<Print setClose3={setClose3} />}
                      <input type='checkbox' className={styles.checkkk}></input>
                  {!close3 && <Printss className={styles.impressao} setClose3={setClose3} order={orders} orderId={Ide}/>}
                  </button>

                  </td>
                </tr>
              </tbody>

          ))}
        </table>
      </div>
      </div>
  );
};

export default Sidebar;