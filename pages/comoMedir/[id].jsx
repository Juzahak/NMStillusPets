import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../../components/Featured";
import PizzaList2 from "../../components/PizzaList2";
import styles from "../../public/styles/Home.module.css";
import useSwr from 'swr'
import { sliderUnstyledClasses } from "@mui/base";

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
                        <h1 className="text-white">Como medir</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Como medir</li>
                        </ol>
                    </div>

                </section>

                <section>

                    <h1 className="text-center mt-5 mb-5">Como medir seu pet</h1>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
                        <div className={styles.correto2}>
                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/medidas-pet.jpg" alt="" width="450" height="450" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <h3>Tirando medidas de forma simples</h3>

                                <p>Você vai precisar de:  1 fita métrica, lápis ou caneta e papel.</p>
                                <p>Posicione seu bichinho em pé e com a cabeça erguida para que você possa tirar as medidas corretamente.
                                    O importante é saber o lugar exato para posicionar a fita métrica e procure deixar a fita métrica relaxada sobre as áreas, não apertando nem soltando em excesso, somente levemente.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container d-flex flex-column">
                        <h5>Com a ajuda de uma fita métrica, siga esses passos para mensurar e anotar as 3 medidas principais:</h5>
                        <h5>PESCOÇO</h5>
                        <p className={styles.fonteee}>Cirule a fita entorno do pescoço (onde a coleira fica apoiada), não aperte muito, mas também não deixe muito largo;</p>
                        <h5>PEITO (TÓRAX)</h5>
                        <p className={styles.fonteee}>Passe a fita em volta do peitoral, após as patas dianteiras para a medida da circunferência do tórax. Lembre-se de deixar um pouquinho frouxo para que seu Pet tenha conforto ao vestir a roupa. Essa é a medida mais importante!!</p>
                        <h5>COSTAS</h5>
                        <p className={styles.fonteee}>Coloque o início da fita na final do pescoço do e leve até a base da cauda (da nuca até o início do rabo), para obter o comprimento do corpo.</p>
                        <p className={styles.fonteee}>

                            Com esses números de medidas em mãos, você encontrará nas nossas Tabelas dos Tamanhos, de acordo com o modelo, o número de roupa pet ideal para seu cão ou gato.</p>
                        <h5>Algumas dicas</h5>
                        <p>- Algumas roupas são mais curtas, como casacos, e algumas mais compridas, tipo vestido, vai depender do modelo;</p>
                            <p>- Para os macacões, é importante levar em consideração a medida das costas também, uma vez que você vai encaixar as patinhas traseiras nele;</p>
                            <p>- Caso as medidas fiquem entre dois tamanhos, escolha sempre o maior tamanho. Roupa apertada é desconfortável para o animal.</p>
                    </div>
                    <h1 className="text-center mt-5 mb-5">Como medir seu pet sem fita métrica</h1>

                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
                        <div className={styles.correto}>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <p>Com um barbante, fita, linha ou qualquer outro fio flexível que possa fazer um círculo, marque o início e o final da medida. Para não haver dúvidas, faça as marcações com caneta ou nozinho ou cortando o pedaço medido. Após feito as marcações, estique o fio e utilize uma régua para saber a dimensão marcada.</p>
                                <p>A medida do pescoço pode ser pela própria coleira ou meça o círculo do pescoço onde a coleira fica apoiada.</p>
                                <p>A medida do tórax, é a mais importante!!! Ela determina o conforto da roupa. Para mensurar a circunferência do tórax , passe o fio envolta do peito, logo após as patas da frente, como mostra a figura.</p>
                                <p>Depois, para o comprimento do corpo, posicione o fio da nunca até o início do rabo.</p>
                                <p>Anote os números das medidas e com eles em mãos, confira em nossa Tabela de Tamanhos, as medidas da roupa e saberá o número adequado para seu cachorro ou gato!</p>
                           </div>

                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/medindo-s.jpg" alt="" width="450" height="450" />
                            </div>
                        </div>
                    </div>


                </section>

            </div>
        );
    }

}