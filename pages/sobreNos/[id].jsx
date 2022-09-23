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

          <h1 className="text-center mt-5 mb-5">Saiba mais sobre nosso ateliê</h1>
          <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
            <div className={styles.correto2}>
              <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                <Image src="/img/foto3.jpg" alt="" width="450" height="450" />
              </div>
              <div className="col-12 col-md-6 col-lg-6 p-2">
                <h3 className="text-center">Quem somos nós</h3>
                
                <p>A N&M Stillus moda Pet é a realização de um sonho, amamos os animais temos 4
                  filhos de 4 patas e sempre estamos rodeados por eles, notamos que a lealdade
                  o carinho de um pet entre uma família humana é algo que só quem tem entende.
                  <br></br><br></br>
                  Juntando o nosso amor pelos animais com o poder da internet, criamos a N&M
                  Stillus Pet com a proposta de tornar disponível no mercado produtos com
                  excelente qualidade a um preço competitivo.
                  <br></br><br></br>
                  Ao comprar na N&M Stillus moda Pet você adquire um produto de qualidade e tem
                  um atendimento dedicado com o foco na satisfação do cliente e bem estar do seu
                  pet.
                  <br></br><br></br>
                  Estamos sempre acompanhando as últimas tendências no mercado Pet no
                  atualizando a nossa seleção de produtos para que você mamãe e papai de pet
                  possam deixar o seu filho de quatro patas ainda mais feliz, garantindo mais
                  conforto no dia a dia.
                  <br></br><br></br>
                  Qualquer dúvida, entre em contato, teremos o maior prazer em atendê-lo.</p>
              </div>
            </div>
          </div>


          <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
            <div className={styles.correto}>
              <div className="col-12 col-md-6 col-lg-6 p-2">
                <h3 className="text-center">Dedicação e amor para seu pet</h3>
                <p>Nós sabemos o quanto o seu bichinho é especial para
                  você, como parte integrante da família.
                  <br></br><br></br>
                  É com todo respeito e dedicação que desenvolvemos
                  nossos produtos, para compartilhar o carinho devido
                  àqueles que “invadiram” nossas casas, nossas vidas e
                  nos inundaram de alegria, sempre a um preço justo.
                  <br></br><br></br>
                  Nossa missão: Oferecer produtos com qualidade, sem
                  abrir mão do estilo casual e clássico<br></br><br></br>
                  Somos apaixonados pelo o que fazemos!<br></br><br></br>
                  Estamos sempre buscando o que há de mais novo e
                  moderno, com o intuito de trazer o que há de melhor,
                  em primeira mão aos nossos clientes.</p>
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
