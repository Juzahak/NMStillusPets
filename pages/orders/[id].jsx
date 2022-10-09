import styles from "../../public/styles/Order.module.css";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSwr from 'swr'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fetcher = (url) => fetch(url).then((res) => res.json())

const Order = ({ orderId }) => {

  const { data: order } = useSwr(`/api/orders/${orderId}`, fetcher)
  console.log(order);

  const status = order?.status;



  const router = useRouter();


  useEffect(() => {

    if (status === 3) {
      let data = localStorage.removeItem('produto');
      console.log(data)

      return;
    }
  }, []);


console.log(order)






  const checked = () => {
    if (order?.metodo == 1) {

      return (<div className={styles.totalTextTitle}>MÉTODO: Cartão Ou Dinheiro</div>)
    } else {
      return (<div className={styles.totalTextTitle}>MÉTODO: Mercado Livre</div>)
    }
  }


  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <>
    <Navbar />
      <section id="page-title" className={styles.estilo}>

        <div className="container clearfix dark">
          <h1 className="text-white">Pedido</h1>
          <ol className="breadcrumb">
            <Link href="/" passHref >
              <li className="breadcrumb-item text-white text-decoration-none"><spam className={styles.pointer}>Home</spam></li>
            </Link>
            <li className="breadcrumb-item active" aria-current="page"><spam className={styles.pointer}>Pedido</spam></li>
          </ol>
        </div>

      </section>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.row}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trTitle}>
                  <th>FOTO</th>
                  <th>PRODUTO</th>
                  <th>TAMANHO</th>
                  <th>OBS</th>
                  <th>VALORES</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>




                {order?.produto.map((produto) =>
                  <tr className={styles.tr} key={produto?._id}>
                    <td>
                      <div className={styles.imgContainer}>
                        <Image
                          src={produto?.img}
                          alt="oi"
                          width="240"
                          height="300"
                          className={styles.imgContainer2}
                        />
                      </div>
                    </td>
                    <td className={styles.name}>
                      <span className={styles.name}>{produto?.title}</span>
                      <div className={styles.extrasmob}>
                        <div>Tamanho:</div>
                        {produto?.extras.map((extra) =>
                          <span key={extra}>  {extra} </span>
                        )}
                        {produto?.refri && <></>}
                      </div>
                    </td>
                    <td>
                      <span className={styles.extras}>
                        <div>Tamanho:</div>
                        {produto?.extras.map((extra) =>
                          <span key={extra}> {extra} </span>
                        )}
                        {produto?.refri && <></>}
                      </span>
                    </td>
                    <td>

                      <span className={styles.extras}>
                        <span></span>

                        {produto.descri}
                        {produto?.refri && <></>}
                      </span>
                    </td>
                    <td className={styles.carttd}>
                      <span className={styles.price}>R${produto?.price}.00  </span>
                      <div className={styles.quantity}>Quantidade: {produto?.quantity}</div>
                    </td>
                    <td className={styles.cartdt}>
                      <span className={styles.price}>R${produto?.price}.00</span>
                    </td>
                    <td className={styles.cartdt}>
                      <span className={styles.quantity}>{produto?.quantity}</span>
                    </td>
                    <td>
                      <span className={styles.total}>R${produto?.price * produto?.quantity}.00</span>
                    </td>
                  </tr>
                )}
                <tr className={styles.tr2}>

                  <td className={styles.address3}>
                    <h5>Cliente</h5>
                    <span className={styles.id4}>{order?.customer}</span>
                  </td>
                  <td className={styles.address3}>
                    <h5>Endereço</h5>
                    <span className={styles.id3}>{order?.address}</span>
                  </td>
                  <td className={styles.address3}>

                    <span className={styles.id2}>{order?.obs}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.row}>
            <div className={statusClass(0)}>
              <Image src="/img/paid.png" width={30} height={30} alt="" />
              <span>Recebido</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(1)}>
              <Image src="/img/caixa.png" width={30} height={30} alt="" />
              <span>Preparando</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(2)}>
              <Image src="/img/transporte.png" width={30} height={30} alt="" />
              <span className={styles.center}>A caminho</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(3)}>
              <Image src="/img/entregue.png" width={30} height={30} alt="" />
              <span>Entregue</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CESTA TOTAL</h2>
            <div className={styles.totalText}>

              {checked()}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>SUBTOTAL:</b>R${order?.total}.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>ENTREGA:</b>R${order?.entrega}.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>TROCO PARA:</b>R${order?.troco}.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>TOTAL:</b>R${order?.total + order?.entrega}.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>MSG:</b> Seu pedido foi recebido, em breve entraremos em contato!
            </div>

            <button disabled className={styles.button}>
              PEDIDO RECEBIDO!
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {

  return {
    props: { orderId: params.id },
  };
};

export default Order;
