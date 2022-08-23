import { useEffect, useState, } from "react";
import styles from "../public/styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import useSwr, {mutate} from 'swr'


const Add = ({ setClose, lista }) => {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [title, setTitle] = useState(null);
  const [list, setList] = useState(null);
  const [listName, setName] = useState("Principal");
  
  
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extraOptions2, setExtraOptions2] = useState([]);
  const [qtd, setQtd] = useState(0);
  
  const [extra, setExtra] = useState(null);
  const [extra2, setExtra2] = useState(null);
  const [refri, setRefri] = useState(false);

  const atualizar = (e, listt) => {
    const checked = e.target.checked;


    if(checked && qtd === 1) {
      alert("Escolha apenas uma lista!")
      e.target.checked = false;
    }
    if(checked && qtd === 0) {
      setQtd(qtd + 1);
      setName(listt.list);
      
    }
    if(checked === false){
      setQtd(qtd - 1);
      setName("");
    }
  }


  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

 

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name] : e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };
  const handleExtraInput2 = (e) => {
    setExtra2({ ...extra2, [e.target.name]: e.target.value });
  };

  const handleExtra2 = (e) => {
    setExtraOptions2((prev) => [...prev, extra2]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    const data2 = new FormData();
    data2.append("file", file2);
    data2.append("upload_preset", "uploads2");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/n-mstilluspets/image/upload",
        data
        
      );
      const uploadRes2 = await axios.post(
        "https://api.cloudinary.com/v1_1/n-mstilluspets/image/upload",
        data2
      );
      
        
      const  url  = await uploadRes.data;
      const  url2  = await uploadRes2.data;
        console.log(url.url, url2.url);
      const newProduct = {
        title,
        desc,
        listName,
        prices,
        refri,
        extraOptions,
        extraOptions2,
        img: url.url,
        img2: url2.url,
      };

      await axios.post("/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleCreateList = async () => {
    
    try {
      const newProduct = {
        list,
      };

      await axios.post("/api/lists", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

 
  console.log(listName)
  console.log(qtd)
  return (
    
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Adicionar novo item!</h1>
        <div className={styles.bebida}>Listas
          <input type="checkbox" 
          className={styles.inputinho} 
          checked={refri} 
          name="text"
          onClick={(e) => setRefri(e.target.checked)} >
         

          </input>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Escolha uma imagem</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <input type="file" onChange={(e) => setFile2(e.target.files[0])} />
        </div>

       
        
    

        
    {refri ? 
        <div className={styles.extraButton4}>
          <input 
          className={styles.input}
          type="text"
          onChange={(e) => setList(e.target.value)}
          />
          <button className={styles.extraButton5} onClick={handleCreateList}>ADD LIST</button>
        </div>
        :
        <></>
        }
        <div className={styles.listcontainer}>
          
        {lista.map((listt) =>
        refri ?
                       <div key={listt.list} className={styles.listcontainer}>{listt.list}
                       <input type="checkbox" 
                       className={styles.inputinho} 
                      
                       name="text"
                       onChange={(e) => atualizar(e, listt)} >
                      
             
                       </input>
                     </div>
          :
          <></>
                    )}

</div>
        <div className={styles.item}>
          <label className={styles.label}>Nome do Produto</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Descrição</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Valor</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Valor do ITEM"
              onChange={(e) => changePrice(e, 0)}
            />
            
            
          </div>
        </div>
        <div className={styles.item}>
          
          <label className={styles.label}>Opções</label>
          <div className={styles.extra}>
           <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Categoria"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Valor/10, 25, 30, 22, 15..."
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Adicionar
            </button>
          </div>
           
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>

        
        <button className={styles.addButton} onClick={handleCreate}>
          Criar item!
        </button>
      </div>
    </div>
  );
};

export default Add;
