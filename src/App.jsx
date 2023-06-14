import { useState, useEffect } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { actualizarCart, actualizarProductos } from "./reducer/shoopingReducer";
import { products } from "./api/db";

function App() {
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    //Actualizando productos
    dispatch(actualizarProductos(products));
    setTimeout(() => {
      setModal(false);
    }, 1000);

    //revisando cart
    try {
      const cart_local = JSON.parse(localStorage.cartlocal);
      dispatch(actualizarCart(cart_local));
    } catch (error) {}
  }, []);

  return (
    <>
      {modal && <Loader />}
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/acerca" element={<About />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
