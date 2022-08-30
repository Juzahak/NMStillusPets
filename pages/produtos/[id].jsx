import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../../components/Featured";
import PizzaList2 from "../../components/PizzaList2";
import styles from "../../public/styles/Home.module.css";
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export const  getServerSideProps = async (ctx) => {
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

export default function Home({admin}) {
  const [close, setClose] = useState(true);
  const [verdade, setVerdade] = useState(true);
  const {data: pizzaList} = useSwr("/api/products", fetcher);
  const {data: lista} = useSwr("/api/lists", fetcher);
  console.log(lista);
  if(lista === true){
    return (
      <div className={styles.container}>
        <Head>
          <title>N&M Stillus Pets</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
       
        <PizzaList2 pizzaList={pizzaList || []} lista={lista || []} verdade={verdade}/>
        
      </div>
    );
  }else{
    return (
      <div className={styles.container}>
        <Head>
          <title>Alimento e Arte</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
        <PizzaList2 pizzaList={pizzaList || []} lista={lista || []} verdade={verdade}/>
        
      </div>
    );
  }
  
}