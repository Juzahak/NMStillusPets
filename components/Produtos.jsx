import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../public/styles/Admin.module.css";
import * as React from "react";
import Edit from "./Edit";
import Editar from "./Editar";
import useSwr, { mutate } from "swr";
import Sidebar from "./Sidebar";
import Add from "./Add";
import AddButton from "./AddButton";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Produtos = () => {
  const { data: orders } = useSwr(`/api/orders`, fetcher, {
    refreshInterval: 5000,
  });
  const { data: products } = useSwr(`/api/products`, fetcher);
  const [close2, setClose2] = useState(true);
  const [close4, setClose4] = useState(true);
  const [Ide, setIde] = useState("");
  const { data: lista } = useSwr("/api/lists", fetcher);

  console.log(products);

  const status = ["Preparando", "A Caminho!", "Entregue!"];

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(`/api/products/${id}`);
      mutate(`/api/products`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orders.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("/api/orders/" + id, {
        status: currentStatus + 1,
      });
      mutate(`/api/orders`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
     
        <div className="col-lg-12">
          <div className={styles.item}>
          <div className="d-flex justify-content-between align-items-center">
          <h1 className={styles.title2}>Produtos</h1>
          {<AddButton setClose={setClose4} />}

          {!close4 && <Add setClose={setClose4} lista={lista || []} />}
          </div>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.title}>
                  <th>IMAGEM</th>
                  <th>TITULO</th>
                  <th>PREÇO</th>
                  <th>EDITAR</th>
                  <th>EXCLUIR</th>
                </tr>
              </tbody>
              {products?.map((product, Index) => (
                <tbody key={Index}>
                  <tr className={styles.trTitle}>
                    <td className={styles.tdTitle}>
                      <div className={styles.tdimgTitle}>
                      <Image
                        src={product?.img}
                        width={120}
                        height={200}
                        objectFit="cover"
                        alt=""
                      />
                      </div>
                    </td>
                    <td className={styles.tdTitle}>{product?.title}</td>
                    <td className={styles.tdTitle}>
                      R${product?.prices[0]}.00
                    </td>
                    <td className={styles.tdTitle}>
                      <button onClick={() => setIde(product?._id)}>
                        {<Edit setClose2={setClose2} />}

                        {!close2 && (
                          <Editar
                            setClose2={setClose2}
                            pizzaList={products}
                            extras={product?.extraOptions}
                            products={products}
                            pizzaId={Ide}
                            title={product?.title}
                            desc2={product?.desc}
                            prices2={product?.prices}
                            estoque={product?.estoque}
                          />
                        )}
                      </button>
                    </td>
                    <td>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(product?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              )).reverse()}
            </table>
          </div>
        </div>
     
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Produtos;
