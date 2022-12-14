import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../../components/Featured";
import PizzaList2 from "../../components/PizzaList2";
import styles from "../../public/styles/Home.module.css";
import useSwr from 'swr'
import { sliderUnstyledClasses } from "@mui/base";
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
                    <title>N&M Stillus Pets</title>
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
                        <h1 className="text-white">Como medir</h1>
                        <ol className="breadcrumb">
                        <Link href="/" passHref >
                            <li className="breadcrumb-item text-white text-decoration-none"><spam className={styles.pointer}>Home</spam></li>
                        </Link>
                        <li className="breadcrumb-item active" aria-current="page"><spam className={styles.pointer}>Como medir</spam></li>
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

                                <p>Voc?? vai precisar de:  1 fita m??trica, l??pis ou caneta e papel.</p>
                                <p>Posicione seu bichinho em p?? e com a cabe??a erguida para que voc?? possa tirar as medidas corretamente.
                                    O importante ?? saber o lugar exato para posicionar a fita m??trica e procure deixar a fita m??trica relaxada sobre as ??reas, n??o apertando nem soltando em excesso, somente levemente.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container d-flex flex-column">
                        <h5>Com a ajuda de uma fita m??trica, siga esses passos para mensurar e anotar as 3 medidas principais:</h5>
                        <h5>PESCO??O</h5>
                        <p className={styles.fonteee}>Cirule a fita entorno do pesco??o (onde a coleira fica apoiada), n??o aperte muito, mas tamb??m n??o deixe muito largo;</p>
                        <h5>PEITO (T??RAX)</h5>
                        <p className={styles.fonteee}>Passe a fita em volta do peitoral, ap??s as patas dianteiras para a medida da circunfer??ncia do t??rax. Lembre-se de deixar um pouquinho frouxo para que seu Pet tenha conforto ao vestir a roupa. Essa ?? a medida mais importante!!</p>
                        <h5>COSTAS</h5>
                        <p className={styles.fonteee}>Coloque o in??cio da fita na final do pesco??o do e leve at?? a base da cauda (da nuca at?? o in??cio do rabo), para obter o comprimento do corpo.</p>
                        <p className={styles.fonteee}>

                            Com esses n??meros de medidas em m??os, voc?? encontrar?? nas nossas Tabelas dos Tamanhos, de acordo com o modelo, o n??mero de roupa pet ideal para seu c??o ou gato.</p>
                        <h5>Algumas dicas</h5>
                        <p>- Algumas roupas s??o mais curtas, como casacos, e algumas mais compridas, tipo vestido, vai depender do modelo;</p>
                            <p>- Para os macac??es, ?? importante levar em considera????o a medida das costas tamb??m, uma vez que voc?? vai encaixar as patinhas traseiras nele;</p>
                            <p>- Caso as medidas fiquem entre dois tamanhos, escolha sempre o maior tamanho. Roupa apertada ?? desconfort??vel para o animal.</p>
                    </div>
                    <h1 className="text-center mt-5 mb-5">Como medir seu pet sem fita m??trica</h1>

                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
                        <div className={styles.correto}>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <p>Com um barbante, fita, linha ou qualquer outro fio flex??vel que possa fazer um c??rculo, marque o in??cio e o final da medida. Para n??o haver d??vidas, fa??a as marca????es com caneta ou nozinho ou cortando o peda??o medido. Ap??s feito as marca????es, estique o fio e utilize uma r??gua para saber a dimens??o marcada.</p>
                                <p>A medida do pesco??o pode ser pela pr??pria coleira ou me??a o c??rculo do pesco??o onde a coleira fica apoiada.</p>
                                <p>A medida do t??rax, ?? a mais importante!!! Ela determina o conforto da roupa. Para mensurar a circunfer??ncia do t??rax , passe o fio envolta do peito, logo ap??s as patas da frente, como mostra a figura.</p>
                                <p>Depois, para o comprimento do corpo, posicione o fio da nunca at?? o in??cio do rabo.</p>
                                <p>Anote os n??meros das medidas e com eles em m??os, confira em nossa Tabela de Tamanhos, as medidas da roupa e saber?? o n??mero adequado para seu cachorro ou gato!</p>
                           </div>

                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/medindo-s.jpg" alt="" width="450" height="450" />
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