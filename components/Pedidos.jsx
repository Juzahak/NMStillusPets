import styles from "../public/styles/Admin.module.css";
import Image from "next/image";
import useSwr, { mutate } from 'swr';
import { useEffect, useState } from "react";
import Print from "./Print";
import Printss from "./Printss";
import * as React from 'react';
import axios from "axios";

const fetcher = (url) => fetch(url).then((res) => res.json())

const Sidebar = () => {
  const { data: orders } = useSwr(`/api/orders`, fetcher, { refreshInterval: 5000 });
  const { data: products } = useSwr(`/api/products`, fetcher);
  const [Ide, setIde] = useState("");
  const [close3, setClose3] = useState(true);

  const status = ["Preparando", "A Caminho!", "Entregue!"];
 console.log(orders)

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
    <div className="col-lg-12 d-flex justify-content-center">
      <div className={styles.item6}>
        <div className={styles.alinhado}>
          <h1 className={styles.title4}>Pedidos</h1>

        </div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.title}>
              <th>FOTO</th>
              <th>PRODUTO</th>
              <th>COMPRADOR</th>
              <th>OBS.</th>
              <th>TOTAL/TROCO</th>
              <th>STATUS</th>
            </tr>
          </tbody>

          {orders?.map((order, Index) => (
            order.status == 3 ?
              <tfoot key={Index}></tfoot>


              :


              <tbody key={Index} className={styles.tbTitle}>

                <tr className={styles.trTitle}>
                  <td className={styles.tdtTitle}>
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

                        </div>
                      </div>
                    )}
                  </td>
                  <td className={styles.tdTitle}>
                    {order?.produto.map((sla, Index) =>
                      <div key={Index}>
                        <div className={styles.spanTitle}>
                         
                          
                          {sla?.title}

                        </div>
                      </div>
                    )}
                  </td>

                  <td className={styles.td2Title}>
                    {order?.produto.map((sla, Index) =>
                      <div className={styles.span2Title} key={Index}>
                        {sla?.extras.map((sla2, Index) =>
                          <span key={Index}>Tamanho:{sla2} </span>
                        )}
                        <span>Valor: R${order?.total}.00</span>
                        Descrição: {sla?.descri}

                      </div>
                    )}
                  </td>
                  <td className={styles.td2Title}>
                      <div className={styles.span3Title} key={Index}>
                      <div className={styles.tdt2Title}>Cliente: {order?.customer}</div>
                     <div className={styles.tdt2Title}>Telefone: {order?.telefone}</div>
                     <div className={styles.tdt2Title}>Bairro: {order?.bairro}</div>
                     <div className={styles.tdt2Title}>Endereço: {order?.address}</div>
                      </div>


                  </td>
                  <td className={styles.metodoTitle}>
                    {order?.metodo === 1 ? <span>Dinheiro/Cartão ({order?.troco}R$)</span> : <span>Mercado Livre</span>}
                  </td>
                  <td className={styles.tdTitle}>
                    <div className={styles.statinho}>{status[order?.status]}</div>
                    <button className={styles.proximo} onClick={() => handleStatus(order?._id)}>
                      Próximo Passo
                    </button>
                    <button onClick={() => setIde(order?._id)} className={styles.impressao2}>
                      {<Print setClose3={setClose3} />}
                      {!close3 && <Printss className={styles.impressao} setClose3={setClose3} order={orders} orderId={Ide} />}
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

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
 
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }


  return {
    props: {
      
    },
  };
};

export default Sidebar;