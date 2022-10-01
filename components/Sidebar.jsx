import styles from "../public/styles/Admin.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Sidebar = ({ setClose, close, setClose2, close2, setClose3, close3, setClose4, close4 }) => {


  const abrefecha = () => {
    if (close === true) {
      setClose(false);
      setClose2(true);
      setClose3(true);
      setClose4(true);
    }
    if (close === false) {
      setClose(false);
      setClose2(true);
      setClose3(true);
      setClose4(true);
    }
  };
  const abrefecha4 = () => {
    if (close2 === true) {
      setClose2(false);
      setClose3(true);
      setClose4(true);
      setClose(true);
    }
    if (close2 === false) {
      setClose2(true);
      setClose3(true);
      setClose4(true);
      setClose(false);
    }
  };
  const abrefecha2 = () => {
    if (close3 === true) {
      setClose3(false);
      setClose2(true);
      setClose4(true);
      setClose(true);
    }
    if (close3 === false) {
      setClose2(true);
      setClose3(true);
      setClose(false);
      setClose4(true);
    }
  };
  const abrefecha3 = () => {
    if (close4 === true) {
      setClose4(false);
      setClose2(true);
      setClose3(true);
      setClose(true);
    }
    if (close4 === false) {
      setClose2(true);
      setClose3(true);
      setClose4(true);
      setClose(false);
    }
  };

  console.log(close3);
  return (
    <div className={styles.sidebar}>
      <div className="col-lg-2 h-100 w-100 d-flex align-items-center flex-column vh-100" >
        <div>
          <Image src="/img/juzawebwhite.png" alt="" width="220" height="200" />
        </div>
        <div className="d-flex justify-content-between flex-column h-100">
          <div>
        <div onClick={() => abrefecha()} className={styles.sidebtn}>
          <a className="text-white text-decoration-none"> Home </a>
        </div>
        <div onClick={() => abrefecha2()} className={styles.sidebtn}>
          <a className="text-white text-decoration-none">Pedidos</a>
        </div>
        <div onClick={() => abrefecha4()} className={styles.sidebtn}>
          <a className="text-white text-decoration-none"> Produtos </a>
        </div>
        <div onClick={() => abrefecha3()} className={styles.sidebtn}>
          <a className="text-white text-decoration-none"> Finalizados </a>
        </div>
        </div>
        <Link href="/" passHref >
        <div className={styles.sidesite}>
          <a className="text-center text-white d-flex justify-content-center align-items-center"> Voltar para o site</a>
        </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
