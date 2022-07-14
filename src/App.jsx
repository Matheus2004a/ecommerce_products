import { useState } from "react"

import Modal from "./components/modal/modal"
import cartProducts from "./services/cart";
import Slider from "./components/slider/slider";
import './App.css';
import './theme/colors.css';

import brand from "../src/icons/logo.svg";
import cart from "../src/icons/icon-cart.svg";
import avatar from "../src/images/image-avatar.png";
import iconDecrement from "../src/icons/icon-minus.svg";
import iconIncrement from "../src/icons/icon-plus.svg";
import iconSideBar from "../src/icons/icon-close.svg"
import product1 from "../src/images/image-product-1-thumbnail.jpg"
import iconMenu from "../src/icons/icon-menu.svg"

function App() {
  const [counterCart, setCounterCart] = useState(0)
  const [notification, setNotification] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [qtdProd, setQtdProd] = useState(0);
  const product = {
    id: 1,
    img: product1,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    qtd: counterCart
  }

  function showNotification() {
    if (counterCart > 0) {
      cartProducts.AddToCart(product)
      const totalProd = cartProducts.qtdProd
      setNotification(true)
      setQtdProd(totalProd)
    } else {
      setNotification(false)
    }
  }

  function showModal() {
    modalShow === false ? setModalShow(true) : setModalShow(false)
  }

  if (counterCart < 0) {
    setCounterCart(0)
  }

  function removeNotification() {
    setNotification(false)
  }

  return (
    <div className="App">

      {modalShow && <Modal deleteNotification={removeNotification} />}

      <header>
        <div className="content-brand">
          <button onClick={() => setMenu(true)}>
            <img src={iconMenu} alt="icon-menu" className="icon-menu" />
          </button>

          <figure>
            <img src={brand} alt="brand" />
          </figure>

          <div className={`backdrop ${menu ? "show" : "hidden"}`} onClick={() => setMenu(false)}>
            <nav>
              <button onClick={() => setMenu(false)}>
                <img src={iconSideBar} alt="icon-nav-bar" />
              </button>

              <ul>
                <li>
                  <a href="">Collections</a>
                </li>
                <li>
                  <a href="">Men</a>
                </li>
                <li>
                  <a href="">Women</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="cart-avatar">
          <figure>
            <button onClick={showModal}>
              <img src={cart} alt="icon-cart" />
            </button>

            {notification && <span className="notification">{qtdProd}</span>}
          </figure>

          <figure>
            <img src={avatar} alt="" className="avatar" />
          </figure>
        </div>
      </header>

      <main>
        <Slider />

        <section>
          <h5 className="title-product">Sneaker Company</h5>

          <h1>Fall Limited Edition Sneakers</h1>

          <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          <article className="row">
            <div className="price-discount">
              <p className="price">
                $125.00
              </p>
              <span className="discount">
                50%
              </span>
            </div>
            <span className="deleted-price">
              $250.00
            </span>
          </article>

          <section className="section-buttons">
            <div className="counter">
              <button onClick={() => setCounterCart(counterCart - 1)}>
                <img src={iconDecrement} alt="icon-decrement" />
              </button>
              <span>{counterCart}</span>
              <button onClick={() => setCounterCart(counterCart + 1)}>
                <img src={iconIncrement} alt="icon-increment" />
              </button>
            </div>

            <button className="button-cart" onClick={showNotification}>
              <figure>
                <img src={cart} alt="" className="icon-cart" />
              </figure>
              Add to cart
            </button>
          </section>
        </section>
      </main>
    </div >
  );
}

export default App;
