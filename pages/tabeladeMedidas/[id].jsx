import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../../components/Featured";
import PizzaList2 from "../../components/PizzaList2";
import styles from "../../public/styles/Home.module.css";
import useSwr from 'swr'
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fetcher = (url) => fetch(url).then((res) => res.json())

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.token) {
    admin = true;
  }


  return {
    props: {

      admin,
    },
  };
};

export default function Home({ admin }) {
  const [close, setClose] = useState(true);
  const [verdade, setVerdade] = useState(true);
  const { data: pizzaList } = useSwr("/api/products", fetcher);
  const { data: lista } = useSwr("/api/lists", fetcher);
  console.log(lista);
  if (lista === true) {
    return (
      <div className={styles.container}>
        <Head>
          <title>NM Stillus Pets</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


      </div>
    );
  } else {
    return (
      <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>NM moda em roupas pet</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section id="page-title" className={styles.estilo}>

          <div className="container clearfix dark">
            <h1 className="text-white">Tabela de Medidas</h1>
            <ol className="breadcrumb">
              <Link href="/" passHref >
                <li className="breadcrumb-item text-white text-decoration-none"><spam className={styles.pointer}>Home</spam></li>
              </Link>
              <li className="breadcrumb-item active" aria-current="page"><spam className={styles.pointer}>Tabela de Medidas</spam></li>
            </ol>
          </div>

        </section>

        <section>

          <h1 className="text-center mt-5 mb-2">Tabela de Medidas</h1>
          <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
            <div className={styles.correto2}>
              <div className="col-12 col-md-12 col-lg-12 p-2">
                
                <h5 className="text-center">Escolher a roupa no tamanho correto é um fator importante para o conforto do animal. Tire as medidas antes de comprar para encontrar o tamanho ideal, através das medidas, nas tabelas dos tamanhos, de acordo com cada modelo..
                  </h5>
              </div>
            </div>
          </div>


          <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste justify-content-center">
            <div className={styles.correto}>
             
              <div className="col-12 col-md-12 col-lg-12 justify-content-center d-flex">
                <Image src="/img/tabelamedidas.jpg" alt="" width="800" height="800" />
              </div>
            </div>
          </div>


        </section>

      </div>
      <Footer />
      </>
    );
  }

}
