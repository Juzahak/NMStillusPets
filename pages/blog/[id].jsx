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
                        <h1 className="text-white">Blog</h1>
                        <ol className="breadcrumb">
                        <Link href="/" passHref >
                            <li className="breadcrumb-item text-white text-decoration-none"><spam className={styles.pointer}>Home</spam></li>
                        </Link>
                            <li className="breadcrumb-item active" aria-current="page"><spam className={styles.pointer}>Blog</spam></li>
                        </ol>
                    </div>

                </section>

                <section>

                    <h1 className="text-center mt-5 mb-5">Roupas pet</h1>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
                        <div className={styles.correto2}>
                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-1.jpg" alt="" width="600" height="450" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <h2>Elas s??o necess??rias?</h2>
                                <br></br>
                                <p>Se voc?? ?? o tipo de tutor que gosta de colocar roupas no seu pet, possivelmente j?? deve ter ouvido de algu??m que se trata de frescura. Do mesmo modo, se voc?? ?? um tutor que nunca recorre a esses acess??rios, ?? bem poss??vel que tamb??m j?? tenha ouvido que o pet pode estar com frio e que o melhor seria colocar nele um agasalho, n??o ?? mesmo?</p>
                                <p>N??o importa de qual lado voc?? esteja, saiba que o mais recomendado, como de costume, n??o ?? nem um extremo nem outro, variando de acordo com as caracter??sticas do seu filho de quatro patas! A seguir, veja quando e por que apostar em roupas pet, e quando n??o us??-las.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container d-flex flex-column">
                        <h2 className="text-center">Afinal, pets precisam usar roupas?</h2>

                        <p className={styles.fonteee}>Um dos principais argumentos levantados por quem dispensa o uso de roupas em pets ?? a cren??a de que, por possu??rem pelos, os cachorros n??o sofrem com baixas temperaturas. Mas n??o ?? bem assim, afinal, os c??es tamb??m sentem frio e precisam desse cuidado.</p>
                        <p className={styles.fonteee}>De acordo com a Dra. Karina Mussolino, m??dica-veterin??ria e gerente t??cnica da Petz, muitos c??es sentem frio sim, ficando sujeitos n??o s?? ao desconforto, como tamb??m a doen??as associadas ?? friagem. Por isso mesmo, ela explica que o uso de roupa de frio para cachorro ?? indicado principalmente para os pets de pelo curto, tosados, sem pelos, filhotes, idosos e de porte pequeno.</p>

                        <p className={styles.fonteee}>J?? no caso de c??es adultos, de grande porte e com pelos longos, ?? importante que, al??m de n??o se mostrar incomodados com o acess??rio, os pets sejam escovados diariamente para evitar a forma????o de n??s.</p>

                        <p className={styles.fonteee}>Vale lembrar que o ambiente tamb??m influencia na necessidade ou n??o de colocar uma roupa no seu pet. Por exemplo, ela pode n??o ser necess??ria para um c??o que fique dentro de uma casa quentinha, protegido do frio e da chuva, mas costuma ser essencial para aqueles que permanecem na ??rea externa ou que sair??o para passear no frio.</p>
                        <p className={styles.fonteee}>Como dica, fique atento aos sinais dados pelo pet: se ele estiver tremendo, encolhido ou procurando abrigo o tempo todo, ?? bom pensar em colocar um agasalho nele!</p>

                    </div>
                    <div className="container">
                        <h3 className="text-center mt-5 mb-5">Como escolher roupa para cachorro?</h3>
                        <p>Ao escolher uma roupa para n??s mesmos, levamos em conta tantos crit??rios diferentes que o conforto, incluindo a prote????o ao frio, muitas vezes se torna quase secund??rio. No entanto, na hora de escolher uma roupinha para o pet, esse sempre deve ser o foco principal.</p>
                        <p>Isso n??o quer dizer que, com tantas op????es dispon??veis atualmente, voc?? n??o possa escolher uma roupa diferente e charmosa. Afinal, faz parte do carinho que a gente tem com os pets querer deix??-los sempre lindos. Para saber como escolher roupa para cachorro, fique atento a estas dicas:</p>
                    </div>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
                        <div className={styles.correto}>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <ul>
                                    <li className="mb-2">Escolha sempre roupas feitas com material confort??vel e, de prefer??ncia, com um tecido de f??cil lavagem e secagem</li>
                                    <li className="mb-2">Evite roupas com forro felpudo em c??es de pelo longo, j?? que elas contribuem para a forma????o de n??s</li>
                                    <li className="mb-2">Lacinhos, gorros, gravatas e fantasias n??o representam um problema, mas evite roupas com penduricalhos pequenos que possam ser engolidos pelo pet</li>
                                    <li className="mb-2">Roupas apertadas restringem o movimento e s??o desconfort??veis. Por isso, procure deixar sempre tr??s dedos de folga</li>
                                    <li className="mb-2">Se poss??vel, leve o pet com voc?? na hora da compra e n??o hesite em colocar a roupa nele para ver se ela est?? do tamanho certo e se ele se sente confort??vel</li>
                                    <li className="mb-2">Caso precise comprar uma roupa sem que o cachorro esteja junto, ?? bom ter em m??os as medidas da circunfer??ncia de barriga e pesco??o, embora o ???olh??metro??? tamb??m possa ajudar.</li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-2.jpg" alt="" width="600" height="450" />
                            </div>
                        </div>
                    </div>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
                        <div className={styles.correto2}>
                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-3.jpg" alt="" width="600" height="450" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <h3>Mesmo com frio, meu pet n??o se acostuma com as roupas</h3>
                                <br></br>
                                <p>Seu cachorro parece estar com frio, mas ?? s?? voc?? colocar a roupa nele que ele vira uma est??tua ou se mostra desconfort??vel? Pode ser que a roupinha seja inc??moda e esteja restringindo seus movimentos, como tamb??m pode ser que seu pet simplesmente n??o se adapte a elas.</p>
                                <p>NNo primeiro caso, uma dica ?? procurar um modelo de roupa para cachorro mais confort??vel e soltinho, como algo sem manga. Se mesmo assim o pet n??o se acostumar, a Dra. Karina Mussolino recomenda n??o insistir. Em vez disso ???compre uma cama bem quentinha, com cobertores, e deixe o pet em local protegido. H?? muitas op????es para mant??-lo aquecido caso ele n??o queira a roupa???, diz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
                        <div className={styles.correto}>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <h3>Cuidados com as roupas para pet</h3>
                                <br></br>
                                <p>Al??m de escolher roupinhas adequadas, ?? importante cuidar delas visto que roupas sujas e ??midas podem contribuir para o surgimento de doen??as. A frequ??ncia de lavagens vai depender do estilo de vida do pet, mas, no geral, recomenda-se lavar a roupa pelo menos uma vez por semana, lembrando que ela deve estar completamente seca antes de ser recolocada.</p>
                                <p>Para c??es de pelo longo, a Dra. Karina tamb??m recomenda que a roupa seja retirada uma vez ao dia, momento em que o tutor dever?? fazer uma escova????o. Do contr??rio, a forma????o de n??s poder?? levar a uma tosa radical ou ao desconforto do bichinho na hora de remov??-los.</p>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-4.jpg" alt="" width="600" height="450"  />
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