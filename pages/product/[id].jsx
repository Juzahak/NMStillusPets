import styles from "../../public/styles/Product.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import Link from "next/link";
import useSwr from 'swr'




const fetcher = (url) => fetch(url).then((res) => res.json())

const Product = ({ productId }) => {
  const { data: pizza } = useSwr(`/api/products/${productId}`, fetcher)

  const [price, setPrice] = useState(0);
  const [descri, setDescri] = useState("Loja");
  const [qtd, setQtd] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const [trocaimgg, setTrocaimg] = useState("l");

  useEffect(() => {
    if (!pizza) return;
    setPrice(pizza?.prices[0]);
    setExtras([pizza?.extraOptions[0].text]);
  }, [pizza]);

  const changePrice = (number) => {
    setPrice(price + number);
  };



  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (pizza.refri == true && qtd <= 1) {
      setQtd(qtd + 1)
      changePrice(option.price);
      setExtras((prev) => [...prev, option.text]);
    }
    if (pizza.refri == true && qtd == 2 && e.target.checked == true) {
      e.target.checked = false;

      alert("Por favor, selecione até uma opcão")


      changePrice(-option.price);
      setExtras(extras.filter(extras => extras !== option.text));
      return false;
    }

    if (pizza.refri == true && qtd <= 2) {
      setQtd(qtd - 1)
      changePrice(-option.price);
      setExtras(extras.filter(extras => extras !== option.text));
    }


    if (checked && qtd <= 1) {

      setQtd(qtd + 1)
      changePrice(option.price);
      setExtras((prev) => [...prev, option.text]);

    }

    if (checked == false && qtd <= 2) {
      setQtd(qtd - 1)
      changePrice(-option.price);
      setExtras(extras.filter(extras => extras !== option.text));
    }
    if (checked == true && qtd == 2) {
      e.target.checked = false;

      alert("Por favor, selecione até uma opção")


      changePrice(-option.price);
      setExtras(extras.filter(extras => extras !== option.text));
      return false;
    }
  };


  const handleClick = () => {
    if (extras == "") {
      alert('Escolha uma caixa');
      return
    }
    if (pizza.refri == false && qtd >= 1 && quantity <= pizza?.estoque) {
      alert('Item adicionado com sucesso');
      dispatch(addProduct({ ...pizza, extras, price, quantity, descri }));
    }
    if (pizza.refri == true && quantity <= pizza?.estoque) {
      alert('Item adicionado com sucesso');
      dispatch(addProduct({ ...pizza, extras, price, quantity, descri }));
    }
    if (qtd <= 1 && quantity <= pizza?.estoque) {

      return
    }
    
    if (quantity > pizza?.estoque) {
      if (pizza?.estoque === 0) {
        alert('Produto sem estoque!');
      }else{alert('Quantidade maior que estoque!');}
      
    }
  }

console.log(extras)





  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>

          {pizza &&


            <div className={styles.wrapperr}>
              {trocaimgg === "l" ?
              <>
              <div className={styles.imgContainer2} >
              <Image src={pizza.img} alt="" layout="fill" objectFit="contain" className={styles.imgContainer3}/>
               </div>
               
               </>
               :
               <></>
              }           
                {trocaimgg === "r" ?
                <>
                <div className={styles.imgContainer2} >
               <Image src={pizza.img2} alt="" layout="fill" objectFit="contain" className={styles.imgContainer3}/>
               </div>
               
                </>
               :
               <></>
              }
            </div>


          }

        </div>
        <div className={styles.left2}>
          <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => setTrocaimg("l")}>
            <Image src="/img/arrowl.png" alt="" width="120px" height="120px" />
          </div>
          <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => setTrocaimg("r")}>
            <Image src="/img/arrowr.png" width="120px" height="120px" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza?.title}</h1>
        <span className={styles.price}>R$ {price}.00</span>
        {pizza?.refri && (
          <>
            <span className={styles.price}> ---- </span>
            <span className={styles.price}>Estoque: {pizza?.estoque}</span>
          </>
        )}
        <p className={styles.desc}>{pizza?.desc}</p>
        {pizza?.refri && (
          <>
            <div className={styles.position}>
              <div className={styles.margem}>
                <h3 className={styles.choose}>Adicione</h3>
                <div className={styles.ingredients} name='form1'>

                  {pizza?.extraOptions.map((option) => (
                    pizza?.extraOptions[0] ?
                    <div className={styles.option} key={option._id}>
                      <input
                        type="checkbox"
                        checked={true}
                        id={option.text}
                        name={option.text}
                        className={styles.checkbox}
                        onChange={(e) => handleChange(e, option)}
                      />
                      <label htmlFor="double">{option.text}</label>
                    </div>
                      :
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
                <h3 className={styles.choose}>Selecione o Tamanho</h3>
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

          <Link href="/" passHref >
            <button className={styles.button} onClick={handleClick}>ADICIONAR</button>
          </Link>

        </div>
      </div>
    </div>
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
