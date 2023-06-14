import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartCompras.css";
import CartItem from "./CartItem";
import { delCart } from "../reducer/shoopingReducer";
import { useNavigate } from "react-router-dom";

const CartCompras = () => {
  const state = useSelector((state) => state);
  const { cart, totalCart } = state.shopping;
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const HandleComprar = () => {
    if (cart.length === 0) {
      return alert("O seu cart esta vazio ainda");
    }
    let mensagem = "Olá, eu vou querer:\n";
    for (let index = 0; index < cart.length; index++) {
      mensagem += `${cart[index].name}----${cart[index].quantity}\n`;
    }
    window.open(
      `https://wa.me/5511948938258?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
    dispatch(delCart());
    Navigate("/");
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
            <button
              className="button_principal button_whatsapp"
              onClick={HandleComprar}
            >
              <i className="fa-brands fa-whatsapp"></i> Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCompras;
