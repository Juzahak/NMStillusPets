import styles from "../public/styles/Cart.module.css";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import {reset} from "../redux/cartSlice";
import {removeProduct} from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";
import axios from "axios";
import Dropdown from "../components/Dropdown";


const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [cash, setCash] = useState(false);
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
    }catch(err){
      console.log(err);
    }
  }

  const estaSel = () => {
    if(cart.quantity == 0) {
      alert("Adicione pelo menos um item!")
      return
    }
    else{
      setMetodo(0);
      setCash(true);
    }
  }
  const estaSel2 = () => {
    if(cart.quantity == 0) {
      alert("Adicione pelo menos um item!")
      return
    
    }else{
      setMetodo(1);
      setCash(true);
    }
  }
  
  
  return (
    <div className={styles.container}> 
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            
          <tr className={styles.trTitle}>
            <th>FOTO</th>
            <th>PRODUTO</th>
            <th>TAMANHO</th>
            <th>DESCRIÇÃO</th>
            <th>PRECO</th>
            <th>TOTAL</th>
           
            
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
            <td>
              <span className={styles.name}>{product.title}</span>
              
            </td>
            <td>
              <span className={styles.extras}>
                
                {product.extras.map((extra) => 
                  <span key={extra._id} >Tamanho: {extra} </span>
                  )}
                {product.refri && <></>}
              </span>
            </td>
            <td>
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
                  <button className={styles.removebtn} onClick={() => {dispatch(removeProduct(product))}}>REMOVER</button>
                </td>
          </tr>
          ))}
          </tbody>
          
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Cesta de Compras</h3>
          <div className={styles.totalText}>
            <span className={styles.totalTextTitle}>SUBTOTAL:</span>R${cart.total}.00
          </div>
          
          
          <div className={styles.totalText}>
            <span className={styles.totalTextTitle}>TOTAL:</span>R${cart.total}.00
          </div>
          
            <div className={styles.paymentMethods}>
              <button className={styles.payButton} onClick={() => estaSel2()}>CARTÃO OU DINHEIRO</button>
            <button className={styles.payButton2} onClick={() => estaSel()}>MERCADO LIVRE
            <Image
                  src="/img/mercadolivre.png"
                  width="60px"
                  height="40px"
                  alt=""
                  
                />
            </button>
            </div>
           
        </div>
      </div>
      
      {cash && <OrderDetail total={cart.total} produto={cart.products} metodo={metodo} size={cart.products.size} createOrder={createOrder} setCash={setCash}/>}
    </div>
  );
};

export default Cart;
