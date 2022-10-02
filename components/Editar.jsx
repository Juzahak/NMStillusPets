import { useState } from "react";
import styles from "../public/styles/Editar.module.css";
import axios from "axios";
import useSwr, { mutate } from 'swr'
import { useEffect } from "react";


const Editar = ({ setClose2, pizzaId, products, extras, title, desc2, prices2, estoque }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [nomePrato, setNomePrato] = useState();
  const [prices, setPrices] = useState();
  const [extra, setExtra] = useState();

  const [extraOptions, setExtraOptions] = useState([]);

  const [desc, setDesc] = useState();
  const [esto, setEsto] = useState();


  const [ide, setId] = useState(pizzaId);


  useEffect(() => {
    for (let i = 0; i < pizzaList.length; i++) {
      if (ide === pizzaList[i]._id) {
        setNomePrato(pizzaList[i].title)
        setPrices(pizzaList[i].prices)
        setExtra(pizzaList[i].extraOptions)
        setDesc(pizzaList[i].desc)
        setEsto(pizzaList[i].estoque)
      }
    }
  }, []);

  console.log(nomePrato, prices, extra, desc, esto)

  const handleUpdate = async (id) => {
    const item = products.filter((pizza) => pizza._id === id);

   
    if (extraOptions == "") {
      alert("preencha os tamanhos corretamente")
      return
    }
    else {
      if (extraOptions === []) {
        setExtraOptions(produto?.extraOptions);
      }
      try {
        const res = await axios.put(`/api/products/${id}`, {
          title: nomePrato,
          prices: prices,
          extraOptions: extraOptions,
          estoque: esto,
          desc: desc,
        });
        mutate(`/api/products`);
        location.reload()
      } catch (err) {
        console.log(err);
      }
    }
  };


  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };


  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };


  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };
  const handleExtra2 = (e) => {
    setExtraOptions(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.flexx}>
          <h1 className={styles.title}>EDITAR ITEM</h1>
          <div onClick={() => setClose2(true)} className={styles.close}>
            X
          </div>
        </div>
        {pizzaList.map((produto, Index) =>
          produto._id == ide ?

            <div key={Index}>
              <div className={styles.item} key={Index}>
                <h2 className={styles.label}>Titulo</h2>
                <input
                  type="text"
                  className={styles.vames}
                  placeholder={produto.title}
                  onChange={(e) => setNomePrato(e.target.value)}
                />

              </div>
              <div className={styles.item}>
                <label className={styles.label}>Valores</label>
                <div className={styles.priceContainer}>
                  <span>Valor:</span>
                  <input
                    className={`${styles.input} ${styles.inputSm}`}
                    type="number"
                    placeholder={produto.prices[0]}
                    onChange={(e) => changePrice(e, 0)}
                  />

                </div>



              </div>

              <div className={styles.item}>

                <label className={styles.label}>Tamanhos</label>
                <div className={styles.extra}>
                  <input
                    className={`${styles.input} ${styles.inputSm}`}
                    type="text"
                    placeholder="P/M/G"
                    name="text"
                    onChange={handleExtraInput}
                  />
                  <input
                    className={`${styles.input} ${styles.inputSm}`}
                    type="number"
                    placeholder="Valor / 0"
                    name="price"
                    onChange={handleExtraInput}
                  />
                  <div className={styles.extraButton} onClick={() => handleExtra2(produto?.extraOptions)}>
                    Usar os mesmos!
                  </div>
                  <div className={styles.extraButton} onClick={handleExtra}>
                    Adicionar!
                  </div>
                </div>

                <div className={styles.extraItems}>
                  <div className={styles.separador}> ANTIGOS:
                    {produto?.extraOptions.map((option, Index) => (

                      <span key={Index} className={styles.extraItem}>
                        {option?.text} : R${option?.price}

                      </span>
                    ))}
                  </div>
                  <div> NOVOS:
                    {extraOptions?.map((option, Index) => (
                      <span key={Index} className={styles.extraItem}>
                        {option?.text}: R${option?.price}

                      </span>
                    ))}
                  </div>
                </div>
              </div>








              <div className={styles.item}>
                <h2 className={styles.label}>Obs Novas</h2>
                <textarea
                  rows={5}
                  placeholder={produto.desc}
                  type="text"
                  className={styles.textarea}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>


              <div className={styles.button} onClick={() => handleUpdate(produto._id)}>
                EDITAR ITEM
              </div>
            </div>
            :
            <span key={Index}></span>
        )}





      </div>
    </div>
  )

};


export default Editar