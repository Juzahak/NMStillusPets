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
                        <h1 className="text-white">Blog</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </div>

                </section>

                <section>

                    <h1 className="text-center mt-5 mb-5">Roupas pet</h1>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
                        <div className={styles.correto2}>
                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-1.jpg" alt="" width="450" height="450" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <h2>Elas são necessárias?</h2>
                                <br></br>
                                <p>Se você é o tipo de tutor que gosta de colocar roupas no seu pet, possivelmente já deve ter ouvido de alguém que se trata de frescura. Do mesmo modo, se você é um tutor que nunca recorre a esses acessórios, é bem possível que também já tenha ouvido que o pet pode estar com frio e que o melhor seria colocar nele um agasalho, não é mesmo?</p>
                                <p>Não importa de qual lado você esteja, saiba que o mais recomendado, como de costume, não é nem um extremo nem outro, variando de acordo com as características do seu filho de quatro patas! A seguir, veja quando e por que apostar em roupas pet, e quando não usá-las.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container d-flex flex-column">
                        <h2 className="text-center">Afinal, pets precisam usar roupas?</h2>

                        <p className={styles.fonteee}>Um dos principais argumentos levantados por quem dispensa o uso de roupas em pets é a crença de que, por possuírem pelos, os cachorros não sofrem com baixas temperaturas. Mas não é bem assim, afinal, os cães também sentem frio e precisam desse cuidado.</p>
                        <p className={styles.fonteee}>De acordo com a Dra. Karina Mussolino, médica-veterinária e gerente técnica da Petz, muitos cães sentem frio sim, ficando sujeitos não só ao desconforto, como também a doenças associadas à friagem. Por isso mesmo, ela explica que o uso de roupa de frio para cachorro é indicado principalmente para os pets de pelo curto, tosados, sem pelos, filhotes, idosos e de porte pequeno.</p>

                        <p className={styles.fonteee}>Já no caso de cães adultos, de grande porte e com pelos longos, é importante que, além de não se mostrar incomodados com o acessório, os pets sejam escovados diariamente para evitar a formação de nós.</p>

                        <p className={styles.fonteee}>Vale lembrar que o ambiente também influencia na necessidade ou não de colocar uma roupa no seu pet. Por exemplo, ela pode não ser necessária para um cão que fique dentro de uma casa quentinha, protegido do frio e da chuva, mas costuma ser essencial para aqueles que permanecem na área externa ou que sairão para passear no frio.</p>
                        <p className={styles.fonteee}>Como dica, fique atento aos sinais dados pelo pet: se ele estiver tremendo, encolhido ou procurando abrigo o tempo todo, é bom pensar em colocar um agasalho nele!</p>

                    </div>
                    <div className="container">
                        <h3 className="text-center mt-5 mb-5">Como escolher roupa para cachorro?</h3>
                        <p>Ao escolher uma roupa para nós mesmos, levamos em conta tantos critérios diferentes que o conforto, incluindo a proteção ao frio, muitas vezes se torna quase secundário. No entanto, na hora de escolher uma roupinha para o pet, esse sempre deve ser o foco principal.</p>
                        <p>Isso não quer dizer que, com tantas opções disponíveis atualmente, você não possa escolher uma roupa diferente e charmosa. Afinal, faz parte do carinho que a gente tem com os pets querer deixá-los sempre lindos. Para saber como escolher roupa para cachorro, fique atento a estas dicas:</p>
                    </div>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
                        <div className={styles.correto}>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <ul>
                                    <li className="mb-2">Escolha sempre roupas feitas com material confortável e, de preferência, com um tecido de fácil lavagem e secagem</li>
                                    <li className="mb-2">Evite roupas com forro felpudo em cães de pelo longo, já que elas contribuem para a formação de nós</li>
                                    <li className="mb-2">Lacinhos, gorros, gravatas e fantasias não representam um problema, mas evite roupas com penduricalhos pequenos que possam ser engolidos pelo pet</li>
                                    <li className="mb-2">Roupas apertadas restringem o movimento e são desconfortáveis. Por isso, procure deixar sempre três dedos de folga</li>
                                    <li className="mb-2">Se possível, leve o pet com você na hora da compra e não hesite em colocar a roupa nele para ver se ela está do tamanho certo e se ele se sente confortável</li>
                                    <li className="mb-2">Caso precise comprar uma roupa sem que o cachorro esteja junto, é bom ter em mãos as medidas da circunferência de barriga e pescoço, embora o “olhômetro” também possa ajudar.</li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-2.jpg" alt="" width="450" height="450" />
                            </div>
                        </div>
                    </div>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-4">
                        <div className={styles.correto2}>
                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-3.jpg" alt="" width="450" height="450" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <h3>Mesmo com frio, meu pet não se acostuma com as roupas</h3>
                                <br></br>
                                <p>Seu cachorro parece estar com frio, mas é só você colocar a roupa nele que ele vira uma estátua ou se mostra desconfortável? Pode ser que a roupinha seja incômoda e esteja restringindo seus movimentos, como também pode ser que seu pet simplesmente não se adapte a elas.</p>
                                <p>NNo primeiro caso, uma dica é procurar um modelo de roupa para cachorro mais confortável e soltinho, como algo sem manga. Se mesmo assim o pet não se acostumar, a Dra. Karina Mussolino recomenda não insistir. Em vez disso “compre uma cama bem quentinha, com cobertores, e deixe o pet em local protegido. Há muitas opções para mantê-lo aquecido caso ele não queira a roupa”, diz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container col-12 col-lg-12 align-items-center d-flex mt-4 mb-5 teste">
                        <div className={styles.correto}>
                            <div className="col-12 col-md-6 col-lg-6 p-2">
                                <h3>Cuidados com as roupas para pet</h3>
                                <br></br>
                                <p>Além de escolher roupinhas adequadas, é importante cuidar delas visto que roupas sujas e úmidas podem contribuir para o surgimento de doenças. A frequência de lavagens vai depender do estilo de vida do pet, mas, no geral, recomenda-se lavar a roupa pelo menos uma vez por semana, lembrando que ela deve estar completamente seca antes de ser recolocada.</p>
                                <p>Para cães de pelo longo, a Dra. Karina também recomenda que a roupa seja retirada uma vez ao dia, momento em que o tutor deverá fazer uma escovação. Do contrário, a formação de nós poderá levar a uma tosa radical ou ao desconforto do bichinho na hora de removê-los.</p>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex">
                                <Image src="/img/blog-4.jpg" alt="" width="450" height="450" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }

}