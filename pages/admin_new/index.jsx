import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../public/styles/Admin.module.css";
import * as React from "react";
import Finalizado from "../../components/Finalizado";
import Finalizados from "../../components/Finalizados";
import Edit from "../../components/Edit";
import Editar from "../../components/Editar";
import Print from "../../components/Print";
import Printss from "../../components/Printss";
import PizzaList from "../../components/PizzaList";
import useSwr, { mutate } from "swr";
import Add from "../../components/Add";
import AddButton from "../../components/AddButton";
import Sidebar from "../../components/Sidebar";
import Home from "../../components/Home";
import Pedidos from "../../components/Pedidos";
import Produtos from "../../components/Produtos";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data: orders } = useSwr(`/api/orders`, fetcher, {
    refreshInterval: 5000,
  });
  const { data: products } = useSwr(`/api/products`, fetcher);
  const [close, setClose] = useState(true);
  const [close2, setClose2] = useState(true);
  const [close3, setClose3] = useState(true);
  const [close4, setClose4] = useState(true);
  const [Ide, setIde] = useState("");
  const [loading, setLoading] = useState(false);
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
      <div className="col-lg-12 d-flex bg-white h-100">
        <Sidebar setClose={setClose} close={close} setClose2={setClose2} close2={close2} setClose3={setClose3} close3={close3} setClose4={setClose4} close4={close4}/>

        {!close4 && <Finalizado setClose4={setClose4} close4={close4} orders={orders}/>}
        {!close3 && <Pedidos setClose3={setClose3} close3={close3}/>}
        {!close2 && <Produtos setClose2={setClose2} close2={close2}/>}
        {!close && <Home setClose={setClose} close={close}/>}
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

export default Index;
