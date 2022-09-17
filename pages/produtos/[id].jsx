import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../../components/Featured";
import PizzaList2 from "../../components/PizzaList2";
import styles from "../../public/styles/Home.module.css";
import useSwr from 'swr'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";


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
          <title>N&M Stillus Pets</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section id="page-title" className={styles.estilo}>

          <div className="container clearfix dark">
            <h1 className="text-white">Produtos
          </h1>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Produtos</li>
            </ul>
          </div>

        </section>
        <PizzaList2 pizzaList={pizzaList || []} lista={lista || []} verdade={verdade} />

      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>NM Moda em roupas pet</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section id="page-title" className={styles.estilo}>

          <div className="container clearfix dark">
            <h1 className="text-white">Produtos</h1>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Produtos</li>
            </ol>
          </div>

        </section>

        <PizzaList2 pizzaList={pizzaList || []} lista={lista || []} verdade={verdade} />

      </div>
    );
  }

}