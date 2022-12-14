import styles from "../../public/styles/Product.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import Link from "next/link";
import useSwr from 'swr'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import swal from 'sweetalert';



const fetcher = (url) => fetch(url).then((res) => res.json())

const Product = ({ productId }) => {
  const { data: pizza } = useSwr(`/api/products/${productId}`, fetcher)

  const [close, setClose] = useState(true);
  const [price, setPrice] = useState(0);
  const [descri, setDescri] = useState("Loja");
  const [tamanholist, setTamanho] = useState("");
  const [valortmh, setvalortmh] = useState("");
  const [qtd, setQtd] = useState(1);
  const [tamanhosele, setTamanhosele] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const [trocaimgg, setTrocaimg] = useState("l");


  const opcoes = [
    {
      tamanho: 'PP',
      valor: '-0',
    },
    {
      tamanho: 'PP',
      valor: '00',
    },
    {
      tamanho: 'P',
      valor: '01',
    },
    {
      tamanho: 'P',
      valor: '02',
    },
    {
      tamanho: 'P',
      valor: '04',
    },
    {
      tamanho: 'M',
      valor: '06',
    },
    {
      tamanho: 'M',
      valor: '08',
    },
    {
      tamanho: 'M',
      valor: '10',
    },
    {
      tamanho: 'M',
      valor: '12',
    },
    {
      tamanho: 'G',
      valor: '14',
    },
    {
      tamanho: 'G',
      valor: '16',
    },
    {
      tamanho: 'G',
      valor: '18',
    },
    {
      tamanho: 'GG',
      valor: '20',
    },
    {
      tamanho: 'GG',
      valor: '22',
    },
  ];

  useEffect(() => {
    if (!pizza) return;
    setPrice(pizza?.prices[0]);
  }, [pizza]);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  console.log(valortmh)



  const construir = (e, text) => {
    const checked = e.target.checked;
    
    
    if(checked == true && tamanhosele == true) {
      swal("Por favor, apenas uma op????o");
      e.target.checked = false;
      return
    } else
    if(checked == true && text !== "") {
      setvalortmh(text);
      console.log(valortmh);
      setTamanhosele(true);
      console.log(tamanhosele);
      setExtras((prev) => [...prev, text]);
      return;
    }
    if(checked == false && text !== "") {
      setvalortmh("");
      console.log(valortmh);
      setTamanhosele(false);
      console.log(tamanhosele);
      setExtras(extras.filter(extras => extras !== text));
      return
    }
    
  }

  const handleChange = (e, option) => {
    const checked = e.target.checked;
   

    if (pizza.refri == true && qtd <= 1) {
      setQtd(qtd + 1)
      changePrice(option.price);
      setExtras(extras.filter(extras => extras !== 'P'));

      setExtras((prev) => [...prev, option.text]);
    }
    if (pizza.refri == true && qtd == 2 && e.target.checked == true) {
      e.target.checked = false;

      swal("Por favor, selecione at?? uma op????o");

      changePrice(-option.price);
      setExtras(extras.filter(extras => extras !== option.text));
      return false;
    }

    if (pizza.refri == true && qtd <= 2) {
      setQtd(qtd - 1)
      changePrice(-option.price);
      setExtras([]);
      setTamanhosele(false);
    }


    if (checked && qtd <= 1) {

      setQtd(qtd + 1)
      changePrice(option.price);
      setExtras(extras.filter(extras => extras !== 'P'));
      setExtras((prev) => [...prev, option.text]);

    }

    if (checked == false && qtd <= 2) {
      setQtd(qtd - 1)
      changePrice(-option.price);
      setExtras([]);
      setTamanhosele(false);
    }
    if (checked == true && qtd == 2) {
      e.target.checked = false;
      swal("Por favor, selecione at?? uma op????o");


      changePrice(-option.price);
      setExtras(extras.filter(extras => extras !== option.text));
      return false;
    }
    if (checked == true) {
      setTamanho(option.text);
    }else{
      setTamanho("");
    }
  };


  const handleClick = () => {

   

    if (qtd === 1) {
      swal("Escolha um tamanho.");
      return
    }
    if (pizza.refri == false && qtd >= 1 && quantity <= pizza?.estoque) {
      swal("Adicionado!", "Item adicionado com sucesso!", "success");
      dispatch(addProduct({ ...pizza, extras, price, quantity, descri }));
    }
    if (pizza.refri == true && quantity <= pizza?.estoque) {
      swal("Adicionado!", "Item adicionado com sucesso!", "success");
      dispatch(addProduct({ ...pizza, extras, price, quantity, descri }));
    }
    if (qtd <= 1 && quantity <= pizza?.estoque) {

      return
    }

    if (quantity > pizza?.estoque) {
      if (pizza?.estoque === 0) {
      swal("Produto sem estoque!");
      } else {
      swal("Quantidade maior que estoque!"); }

    }
  }

  console.log(extras)

  const teste = () => {

    if (close === true) {


      return (
        <>
          <div className={styles.imgContainer2} onClick={() => setClose(false)}>
            <Image src={pizza.img2} alt="" layout="fill" objectFit="contain" className={styles.imgContainer3} />
          </div>
          <div className={styles.popup}>
            <span className={styles.popupclose}>X</span>
            <div className={styles.popupimg}>
              <Image src={pizza.img2} alt="" width="1000px" height="1000px" />
            </div>
          </div>
        </>
      )
    }
    if (close === false) {
      return (
        <>
          <div className={styles.imgContainer2} >
            <Image src={pizza.img2} alt="" layout="fill" objectFit="contain" className={styles.imgContainer3} />
          </div>
          <div className={styles.popupshow}>
            <span className={styles.popupclose} onClick={() => setClose(true)}>X</span>
            <div className={styles.popupimg}>
              <Image src={pizza.img2} alt="" width="1000px" height="1400px" />
            </div>
          </div>
        </>
      )
    }
  }

  const teste2 = () => {

    if (close === true) {


      return (
        <>
          <div className={styles.imgContainer2} onClick={() => setClose(false)}>
            <Image src={pizza.img} alt="" layout="fill" objectFit="contain" className={styles.imgContainer3} />
          </div>
          <div className={styles.popup}>
            <span className={styles.popupclose}>X</span>
            <div className={styles.popupimg}>
              <Image src={pizza.img} alt="" width="1000px" height="1000px" />
            </div>
          </div>
        </>
      )
    }
    if (close === false) {
      return (
        <>
          <div className={styles.imgContainer2} >
            <Image src={pizza.img} alt="" layout="fill" objectFit="contain" className={styles.imgContainer3} />
          </div>
          <div className={styles.popupshow}>
            <span className={styles.popupclose} onClick={() => setClose(true)}>X</span>
            <div className={styles.popupimg}>
              <Image src={pizza.img} alt="" width="1000px" height="1400px" />
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <Navbar />
      <section id="page-title" className={styles.estilo}>

        <div className="container clearfix dark">
          <h1 className="text-white">Produto</h1>
          <ol className="breadcrumb">
            <Link href="/" passHref >
              <li className="breadcrumb-item text-white text-decoration-none cursor-pointer"><spam className={styles.pointer}>Home</spam></li>
            </Link>
            <Link href="/produtos/[id].jsx" passHref >
              <li className="breadcrumb-item text-white text-decoration-none cursor-pointer"><spam className={styles.pointer}>Todos os Produtos</spam></li>
            </Link>
            <li className="breadcrumb-item active" aria-current="page">Produto</li>
          </ol>
        </div>

      </section>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>

            {pizza &&


              <div className={styles.wrapperr}>
                {trocaimgg === "l" ?
                  <>
                    {teste2()}

                  </>
                  :
                  <></>
                }
                {trocaimgg === "r" ?
                  <>
                    {teste()}

                  </>
                  :
                  <></>
                }
              </div>


            }

          </div>
          <div className={styles.left2}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => setTrocaimg("l")}>
              <Image src="/img/arrowl.png" alt="" width="50px" height="50px" />
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => setTrocaimg("r")}>
              <Image src="/img/arrowr.png" width="50px" height="50px" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza?.title}</h1>
          <span className={styles.price}>R$ {price.toFixed(2)}</span>

          <p className={styles.desc}>{pizza?.desc}</p>
          {pizza?.refri && (
            <>
              <div className={styles.position}>
                <div className={styles.margem}>
                  <h3 className={styles.choose}>Adicione</h3>
                  <div className={styles.ingredients} name='form1'>
                    <div className="d-flex mb-4">
                      {pizza?.extraOptions.map((option) => (

                        <div className={styles.option} key={option._id}>
                          <input
                            type="checkbox"
                            id={option.text}
                            name={option.text}
                            className={styles.checkbox}
                            onChange={(e) => handleChange(e, option)}
                          />
                          <label htmlFor="double">{option.text}</label>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex">
                      {opcoes?.map(listaTamanho =>
                        listaTamanho.tamanho === tamanholist ?
                          <div className={styles.option} key={tamanholist.valor}>
                            <input
                              type="checkbox"
                              id={listaTamanho.valor}
                              name={listaTamanho.tamanho}
                              className={styles.checkbox}
                              onChange={(e) => construir(e, listaTamanho.valor)}
                            />
                            <label htmlFor="double">{listaTamanho.valor}</label>
                          </div>
                          :
                          <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {!pizza?.refri && (

            <>



              <h3 className={styles.choose}>Nos conte abaixo como desejaria!</h3>

              <div className={styles.item}>

                <textarea
                  rows={5}
                  type="text"
                  className={styles.textarea}
                  onChange={(e) => setDescri(e.target.value)}
                />
              </div>

              <div className={styles.position}>
                <div className={styles.margem}>
                  <h3 className={styles.choose2}>Selecione o Tamanho</h3>
                  <div className={styles.ingredients} name='form1'>

                    {pizza?.extraOptions.map((option) => (
                      <div className={styles.option} key={option._id}>
                        <input
                          type="checkbox"
                          id={option.text}
                          name={option.text}
                          className={styles.checkbox}
                          onChange={(e) => handleChange(e, option)}
                        />
                        <label htmlFor="double">{option.text}</label>
                      </div>

                    ))}
                  </div>
                </div>

              </div>
            </>
          )}
          <div className={styles.add}>
            <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
            {pizza?.estoque === 0 ?
              <Link href="https://web.whatsapp.com/send?phone=5513991553318" passHref >
                <button className={styles.button} onClick={handleClick}>ENCOMENDAR</button>
              </Link>
              :
              <Link href="/produtos/[id].jsx" passHref >
                <button className={styles.button} onClick={handleClick}>ADICIONAR</button>
              </Link>
            }

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {

  return {
    props: {
      productId: params.id
    },
  };
};

export default Product;
