import styles from "../public/styles/Admin.module.css";
import Image from "next/image";

const Footeradmin = ({ setClose }) => {
  return (
      <div className={styles.footer}>
        <div>
        <h5 className="text-white">Desenvolvido por @WebServices</h5>
        </div>
        <div>
          <Image src="/img/juzawebwhite.png" alt="" width="220" height="200" />
        </div>
      </div>
  );
};

export default Footeradmin;