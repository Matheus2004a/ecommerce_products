import cart from "../src/images/icon-cart.svg";
import avatar from "../src/images/image-avatar.png";
import iconDecrement from "../src/images/icon-minus.svg";
import iconIncrement from "../src/images/icon-plus.svg";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sneakers</h1>

        <nav>
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

        <div className="cart-avatar">
          <figure>
            <img src={cart} alt="" />
          </figure>

          <figure>
            <img src={avatar} alt="" className="avatar" />
          </figure>
        </div>
      </header>

      <section>
        <h4 className="title-product">Sneaker Company</h4>

        <h2 className="">Fall Limited Edition Sneakers</h2>

        $125.00
        50%
        $250.00

        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>

        <div className="counter">
          <button>
            <img src={iconDecrement} alt="" />
          </button>
          <span>0</span>
          <button>
            <img src={iconIncrement} alt="" />
          </button>
        </div>

        <button type="submit" className="button-cart">
          <span>
            <img src={cart} alt="" />
          </span>
          Add to cart
        </button>
      </section>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div >
  );
}

export default App;
