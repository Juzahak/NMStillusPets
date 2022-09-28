import styles from "../public/styles/Admin.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [close3, setClose3] = useState(true);
  console.log(close3);
  return (
    <div className={styles.sidebar}>
    <div className="col-lg-2 bg-black h-100 w-100 d-flex align-items-center flex-column" >
      <div className="m-5 p-4">
        <Image src="/img/checked.png" alt="" width="100" height="100" />
      </div>
      <div className={styles.sidebtn}>
        <a className="text-white"> Home </a> 
        </div>
        <div onClick={() => setClose3(false)} className={styles.sidebtn}>
        Editar
        </div>
        <div className={styles.sidebtn}>
        <a className="text-white"> Produtos </a> 
        </div>
        <div className={styles.sidebtn}>
        <a className="text-white"> Finalizados </a> 
        </div>
        <div className="mb-5 mt-5">
        <Image src="/img/checked.png" alt="" width="100" height="100" />
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
