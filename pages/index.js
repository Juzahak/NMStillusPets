import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../public/styles/Home.module.css";
import useSwr from 'swr';
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
  const { data: pizzaList } = useSwr("/api/products", fetcher);
  const { data: lista } = useSwr("/api/lists", fetcher);
  console.log(lista);

    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <Head>
            <title>NM Stillus Pets</title>
            <meta name="description" content="Bem vindos a nossa loja de moda pet, material de qualidade e tudo que seu pet vai precisar para ficar sempre na moda e quentinho."/>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            <meta name="keywords" content="NM, stillus, moda, pet, geral, nmstillusmodapetemgeral, roupa pet, moda pet, conjunto pet, em geral, roupa de cachorro, roupa de gato, roupinhas, moda em geral, roupinha de frio, roupa pet de frio, cama pet"/>
            <meta name="author" content="Edevaldo - WebServices"/>

            <meta property="og:title" content="NM Stillus moda pet"/>
            <meta property="og:description" content="NM Stillus moda pet - Serra Negra"/>
            <meta property="og:type" content="website"/>
              
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Featured />
          <div className="container d-flex flex-column flex-lg-row">
            <div className={styles.pointer}>
              <div className="col-12 text-center p-2">
                <Image src="/img/promo1.jpg" alt="" width="812" height="950" />
              </div>
            </div>
            <div className={styles.pointer}>
              <div className="col-12 text-center p-2">
                <Image src="/img/promo2.jpg" alt="" width="812" height="950" />
              </div>
            </div>
          </div>
          <PizzaList pizzaList={pizzaList || []} lista={lista || []} />
          <div className={styles.ladolado}>
            <div className="container bg-transparent pt-5 pb-5 mt-5">
              <div className="col-12  d-flex flex-column">
                <div className="col-12 col-lg-12 text-center">
                  <Image src="/img/comomedir.jpg" alt="" width="500" height="500" />
                </div>
                <div className="col-12 col-lg-12 align-items-center d-flex text-center flex-column justify-content-center">
                  <h2>Como medir seu pet?</h2>
                  <p className={styles.textt}>Escolher a roupa no tamanho correto ?? um fator importante para o conforto do animal. Tire as medidas antes de comprar para achar o look perfeito para seu pet! Depois encontre o tamanho ideal, atrav??s das medidas, nas tabelas dos tamanhos, de acordo com cada modelo.</p>
                  <div className="col-6 d-flex ">
                    <Link href="/comoMedir/[id].jsx" passHref >
                      <div className={styles.btnsaiba}>
                        <spam className={styles.corcerta}>Saiba Mais</spam>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="container bg-transparent pt-5 pb-5 mt-5">
              <div className="col-12 d-flex flex-column">
                <div className="col-12 col-lg-12 text-center">
                  <Image src="/img/vantagens.jpg" alt="" width="500" height="500" />
                </div>
                <div className="col-12 col-lg-12 align-items-center d-flex text-center flex-column justify-content-center">
                  <h2>Vista seu pet</h2>
                  <p className={styles.textt}>Se voc?? ?? o tipo de tutor que gosta de colocar roupas no seu pet, possivelmente j?? deve ter ouvido de algu??m que se trata de frescura. Do mesmo modo, se voc?? ?? um tutor que nunca recorre a esses acess??rios, ?? bem poss??vel que tamb??m j?? tenha ouvido que o pet pode estar com frio e que o melhor seria colocar nele um agasalho, n??o ?? mesmo?</p>
                  <div className="col-6 d-flex ">
                    <Link href="/blog/[id].jsx" passHref >
                      <div className={styles.btnsaiba}>
                        <spam className={styles.corcerta}>Visite nosso Blog</spam>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );

}

