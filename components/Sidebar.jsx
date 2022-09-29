import styles from "../public/styles/Admin.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Sidebar = ({ setClose2, close2, setClose3, close3 }) => {


  const abrefecha = () => {
    if(close2 === true) {
      setClose2(false);
      setClose3(true);
    }
    if(close2 === false) {
      setClose2(true);
      setClose3(true);
    }
  };
  const abrefecha2 = () => {
    if(close3 === true) {
      setClose2(true);
      setClose3(false);
    }
    if(close3 === false) {
      setClose2(true);
      setClose3(true);
    }
  };

  console.log(close3);
  return (
    <div className={styles.sidebar}>
    <div className="col-lg-2 bg-black h-100 w-100 d-flex align-items-center flex-column" >
      <div>
        <Image src="/img/checked.png" alt="" width="100" height="100" />
      </div>
      <div className={styles.sidebtn}>
        <a className="text-white"> Home </a> 
        </div>
        <div onClick={() => abrefecha2()} className={styles.sidebtn}>
        Pedidos
        </div>
        <div onClick={() => abrefecha()} className={styles.sidebtn}>
        <a className="text-white"> Produtos </a> 
        </div>
        <div className={styles.sidebtn}>
        <a className="text-white"> Finalizados </a> 
        </div>
        <div>
        <Image src="/img/checked.png" alt="" width="100" height="100" />
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
