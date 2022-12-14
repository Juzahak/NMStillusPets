import Image from "next/image";
import styles from "../public/styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import Dropdown from "../components/Dropdown";


const Navbar = () => {
  const [data, setData] = useState();
  const quantity = useSelector((state) => state.cart.quantity);


  useEffect(() => {


    let data = JSON.parse(localStorage.getItem('produto'));
    console.log(data)
    setData(data);
    return;

  }, []);

  const pedidinho = data ? `/orders/${data}` : `/orderCheck`;



  const teste = () => {

    if (quantity > 0) {


      return (<Link href="/cart" passHref>
        <div className={styles.item2}>
          <div className={styles.cart}>
            <Image src="/img/carticon1.png" alt="" width="60px" height="60px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      )
    }
    if (quantity == 0) {
      return (<Link href="/cart" passHref>
        <div className={styles.item2}>
          <div className={styles.cart}>
            <Image src="/img/carticon2.png" alt="" width="60px" height="60px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      )
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <Dropdown pedidinho={pedidinho} />
      </div>
      <div className={styles.logotipomob}>
        <div>
        <Image src="/img/NMLogo.png" alt="" width="500px" height="500px" />
        </div>
        
      </div>

      <div className={styles.menumob}>
        <div className={styles.item2}>
          <a href="https://nmstilluspets.mercadoshops.com.br/?preview.com.br/" rel="noreferrer" target="_blank" passHref>
            <div className={styles.callButton3}>
              <Image src="/img/mercadolivre.png" alt="" width="400" height="300" />
            </div>
          </a>
          <a href="https://www.instagram.com/noemymaximoatelie/" rel="noreferrer" target="_blank" passHref>
            <div className={styles.callButton4}>
              <Image src="/img/instagram.png" alt="" width="100" height="100" />
            </div>
          </a>
          <a href="https://www.facebook.com/nmstilluspets" rel="noreferrer" target="_blank" passHref>
            <div className={styles.callButton5}>
              <Image src="/img/facebook.png" alt="" width="100" height="100" />
            </div>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5519971156832&text=Bem%20vindo%20ao%20NM%20Stillus%20Moda%20Pet"
            rel="noreferrer" target="_blank" passHref>
            <div className={styles.callButton2}>
              <Image src="/img/whatss.png" alt="" width="100" height="100" />
            </div>
          </a>
          <div className={styles.callButton}>
            <Image src="/img/NMLogo.png" alt="" width="180" height="150" />
          </div>

        </div>
        <div className={styles.item}>

          <ul className={styles.list}>
            <Link href="/" passHref >
              <div className={styles.menus3}>Home</div>
            </Link>
            <Link href="/produtos/[id].jsx" passHref >
              <div className={styles.menus2}>Produtos</div>
            </Link>
            <Link href={pedidinho} passHref >
              <div className={styles.menus} >Pedido</div>
            </Link>
            <Link href="/comoMedir/[id].jsx" passHref >
              <div className={styles.menus} >Como Medir</div>
            </Link>
            <Link href="/tabeladeMedidas/[id].jsx" passHref >
              <div className={styles.menus} >Tabelas</div>
            </Link>
            <Link href="/blog/[id].jsx" passHref >
              <div className={styles.menus} >Blog</div>
            </Link>
            <Link href="/sobreNos/[id].jsx" passHref >
              <div className={styles.menus} >Sobre n??s</div>
            </Link>





          </ul>
          <div>
            {teste()}

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
