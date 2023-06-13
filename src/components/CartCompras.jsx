import React from "react";
import { useSelector } from "react-redux";

import "./CartCompras.css";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartCompras = () => {
  const state = useSelector((state) => state);
  const { cart, totalCart } = state.shopping;
  const HandleComprar = () => {
    if (cart.length === 0) {
      return alert("O seu cart esta vazio ainda");
    }
    console.log(cart);
  };
  return (
    <>
      <div className="container_cart">
        <div className="title_principal">
          <p>Compras Realizadas</p>
        </div>
        <div className="table">
          <table className="table_cart">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Cantidade</th>
                <th>Preço</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <CartItem data={cartItem} key={cartItem.id} />
              ))}
            </tbody>
          </table>
          <div className="info_cart">
            <span>Total: {totalCart.toFixed(2)} Reais</span>
            <button className="button_principal" onClick={HandleComprar}>
              <i className="fa-brands fa-whatsapp"></i> Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCompras;
