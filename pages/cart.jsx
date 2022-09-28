import styles from "../public/styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import { removeProduct } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";
import axios from "axios";
import Dropdown2 from "../components/Dropdown2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [cash, setCash] = useState(false);
  const [select, setSelect] = useState("");
  const [price, setPrice] = useState(0);
  const [metodo, setMetodo] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();


  console.log(cart.products)

  const createOrder = async (data) => {
    try {
      const res = await axios.post(`/api/orders`, data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
        localStorage.setItem("produto", JSON.stringify(res.data._id));
      }
    } catch (err) {
      console.log(err);
    }
  }

  const estaSel = () => {
    if (cart.quantity == 0) {
      alert("Adicione pelo menos um item!")
      return
    }
    else {
      setMetodo(0);
      setCash(true);
    }
  }
  const estaSel2 = () => {
    if (cart.quantity == 0) {
      alert("Adicione pelo menos um item!")
      return

    } else {
      setMetodo(1);
      setCash(true);
    }
  }


  return (
    <>
    <Navbar />
      <section id="page-title" className={styles.estilo}>

        <div className="container clearfix dark">
          <h1 className="text-white">Cesta de Compras</h1>
          <ol className="breadcrumb">
            <Link href="/" passHref >
              <li className="breadcrumb-item text-white text-decoration-none"><spam className={styles.pointer}>Home</spam></li>
            </Link>
            <li className="breadcrumb-item active" aria-current="page"><spam className={styles.pointer}>Cesta de Compras</spam></li>
          </ol>
        </div>

      </section>
      <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
            <tbody>

              <tr className={styles.trTitle}>
                <th className="text-center">FOTO</th>
                <th className="text-center">PRODUTO</th>
                <th className="text-center">TAMANHO</th>
                <th className="text-center">DESCRIÇÃO</th>
                <th className="text-center">PRECO</th>
                <th className="text-center">TOTAL</th>


              </tr>
            </tbody>
            <tbody>

              {cart.products.map((product) => (

                <tr className={styles.tr} key={product._id}>
                  <td>
                    <div className={styles.imgContainer}>

                      <Image
                        src={product.img}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        className={styles.imgContainer}

                      />

                    </div>
                  </td>
                  <td className={styles.name2}>
                    <span className={styles.name}>{product.title}</span>

                  </td>
                  <td>
                    <span className={styles.extras}>

                      {product.extras.map((extra) =>
                        <span key={extra._id} >{extra} </span>
                      )}
                      {product.refri && <></>}
                    </span>
                  </td>
                  <td className="m-0">
                    <p className={styles.price}>
                      {product.descri}
                    </p>
                  </td>
                  <td className={styles.carttd}>
                    <span className={styles.price}>R${product.price}.00 </span>
                    <p className={styles.quantity}>Quantidade: {product.quantity}</p>
                  </td>
                  <td className={styles.cartdt}>
                    <span className={styles.price}>R${product.price}.00</span>
                  </td>
                  <td className={styles.cartdt}>
                    <span className={styles.quantity}>{product.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.total}>R${product.price * product.quantity}.00</span>
                  </td>
                  <td>
                    <button className={styles.removebtn} onClick={() => { dispatch(removeProduct(product)) }}>REMOVER</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Valores</h3>
            <div className={styles.totalText}>
              <span className={styles.totalTextTitle}>SUBTOTAL:</span>R${cart.total}.00
            </div>
            <div className={styles.totalText}>
              <Dropdown2 select={select} setSelect={setSelect} setPrice={setPrice} price={price} />
            </div>
            {select === "Mercado Livre" ?
              <>
              <div className={styles.totalText}>

                <span className={styles.totalTextTitle}>ENTREGA:</span>para fora de serra negra pedimos para que realize o pedido pelo mercado livre, preparamos a página para que você possa economizar no frete!
              </div>
              <div className={styles.paymentMethods}>
                <a className={styles.payButton2} target="_blank" rel="noreferrer" href="https://nmstilluspets.mercadoshops.com.br/?preview.com.br/">Mercado Livre
              <Image src="/img/mercadolivre.png" alt="" width="50" height="30" />
                </a>

              </div>
            </>
              :
              <>
                <div className={styles.totalText}>

                  <span className={styles.totalTextTitle}>ENTREGA:</span>R${price}.00

                </div>
                <div className={styles.totalText}>
                  <span className={styles.totalTextTitle}>TOTAL:</span>R${cart.total + price}.00
                </div>


                <div className={styles.paymentMethods}>
                  <button className={styles.payButton} onClick={() => estaSel2()}>CARTÃO OU DINHEIRO</button>

                </div>
              </>
              
            }
          </div>
        </div>

        {cash && <OrderDetail total={cart.total} produto={cart.products} metodo={metodo} size={cart.products.size} createOrder={createOrder} setCash={setCash} />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
