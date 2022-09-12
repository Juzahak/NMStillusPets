import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../public/styles/Home.module.css";
import useSwr from 'swr';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const { data: pizzaList } = useSwr("/api/products", fetcher);
  const { data: lista } = useSwr("/api/lists", fetcher);
  console.log(lista);
  if (admin === true) {
    return (
      <div className={styles.container}>
        <Head>
          <title>N&M Stillus Pets</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Featured />
        {<AddButton setClose={setClose} />}
        <PizzaList pizzaList={pizzaList || []} lista={lista || []} />
        {!close && <Add setClose={setClose} lista={lista || []} />}
      </div>
    );
  } else {
    return (

      <div className={styles.container} >
        <Head>
          <title>N&M Stillus Pets</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Featured />

        <PizzaList pizzaList={pizzaList || []} lista={lista || []} />
        <div className="container">
          <div className="col-12 d-flex">
            <div className="col-6 text-center">
              <Image src="/img/comomedir.jpg" alt="" width="500" height="500" />
            </div>
            <div className="col-6 d-flex text-center flex-column justify-content-center">
              <h2>Como medir seu pet?</h2>
              <p className="p-3">Escolher a roupa no tamanho correto é um fator importante para o conforto do animal. Tire as medidas antes de comprar para achar o look perfeito para seu pet! Depois encontre o tamanho ideal, através das medidas, nas tabelas dos tamanhos, de acordo com cada modelo.</p>
              <div className={styles.btnsaiba}>Saiba Mais</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

