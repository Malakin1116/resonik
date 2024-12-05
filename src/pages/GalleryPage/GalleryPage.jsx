import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./GalleryPage.module.css";

function Cart({ cart, onRemove, onCheckout }) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price;
    }, 0);
  };

  return (
    <div className={css.cart}>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className={css.cartItem}>
              {item.title} - {item.price}
              <button
                onClick={() => onRemove(index)}
                className={css.removeButton}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <>
          <div className={css.total}>
            Общая стоимость: ${getTotalPrice().toFixed(2)}
          </div>
          <button onClick={onCheckout} className={css.checkoutButton}>
            Оформить заказ
          </button>
        </>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [cart, setCart] = useState([]);

  const images = [
    {
      id: 1,
      src: "/Gallery/1228standart.jpg",
      title: "1/2-28 223",
      price: "$150",
    },
    {
      id: 2,
      src: "/Gallery/58standart.jpg",
      title: "5/8-24 308",
      price: "$150",
    },
    { id: 3, src: "/Gallery/15standart.jpg", title: "15R 308", price: "$150" },
    {
      id: 4,
      src: "/Gallery/58interga.jpg",
      title: "5/8-24 Integra 308",
      price: "$300",
    },
    { id: 5, src: "/Gallery/14lstandart.jpg", title: "15L 308", price: "$150" },
    {
      id: 6,
      src: "/Gallery/1228standart.jpg",
      title: "1/2-28 223",
      price: "$150",
    },
  ];

  const handleAddToCart = (id) => {
    const item = images.find((image) => image.id === id);
    setCart((prevCart) => [...prevCart, item]);
    toast.success(`${item.title} добавлен в корзину!`);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    toast.info("Товар удален из корзины!");
  };

  const handleCheckout = () => {
    toast.success("Спасибо за покупку!");
    setCart([]);
  };

  return (
    <div className={css.container}>
      <ToastContainer />
      <h1 className={css.title}>Gallery</h1>
      <div className={css.grid}>
        {images.map(({ id, src, title, price }) => (
          <div key={id} className={css.card}>
            <img src={src} alt={title} className={css.image} />
            <div className={css.info}>
              <h2 className={css.title}>{title}</h2>
              <p className={css.price}>{price}</p>
              <button
                className={css.buyButton}
                onClick={() => handleAddToCart(id)}
              >
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>
      <Cart
        cart={cart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
