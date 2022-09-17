import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../../components/Featured";
import PizzaList2 from "../../components/PizzaList2";
import styles from "../../public/styles/Home.module.css";
import useSwr from 'swr'
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
          <title>NM Stillus Pets</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>NM moda em roupas pet</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section id="page-title" className={styles.estilo}>

          <div className="container clearfix dark">
            <h1 className="text-white">Sobre Nós</h1>
            <ol className="breadcrumb">
              <Link href="/" passHref >
                <li className="breadcrumb-item text-white text-decoration-none"><spam className={styles.pointer}>Home</spam></li>
              </Link>
              <li className="breadcrumb-item active" aria-current="page"><spam className={styles.pointer}>Sobre Nós</spam></li>
            </ol>
          </div>

        </section>

        <section>

          <h1 className="text-center mt-5 mb-5">Saiba mais sobre nossa alfaiataria</h1>
          <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
            <div className={styles.correto2}>
              <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                <Image src="/img/foto3.jpg" alt="" width="450" height="450" />
              </div>
              <div className="col-12 col-md-6 col-lg-6 p-2">
                <h3>Local de trabalho</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error aut qui dignissimos, veritatis magnam ducimus repudiandae nemo animi necessitatibus hic quaerat saepe vero iusto cupiditate fugit. Officiis, tenetur itaque!</p>
              </div>
            </div>
          </div>


          <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
            <div className={styles.correto}>
              <div className="col-12 col-md-6 col-lg-6 p-2">
                <h3>Dedicação e amor para seu pet</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error aut qui dignissimos, veritatis magnam ducimus repudiandae nemo animi necessitatibus hic quaerat saepe vero iusto cupiditate fugit. Officiis, tenetur itaque!</p>
              </div>
              <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                <Image src="/img/foto2.jpg" alt="" width="450" height="450" />
              </div>
            </div>
          </div>


          <div className="container mb-5">
            <div className="row clearfix">

              <div className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft animated d-flex justify-content-center">
                <div className="inner-box h-100">
                  <div className="image-box h-100">
                    <Image src="/img/sob-1.jpg" alt="" width="300" height="300" />
                  </div>
                </div>
              </div>

              <div className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft animated d-flex justify-content-center">
                <div className="inner-box h-100">
                  <div className="image-box h-100">
                    <Image src="/img/sob-2.jpg" alt="" width="300" height="300" />
                  </div>
                </div>
              </div>

              <div className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft animated d-flex justify-content-center">
                <div className="inner-box h-100">
                  <div className="image-box h-100">
                    <Image src="/img/sob-3.jpg" alt="" width="300" height="300" />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }

}