import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, clearCart } from "../../redux/cart/slice";
import css from "./CartPage.module.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items); // Получаем корзину из глобального состояния
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id)); // Удаляем товар по id
  };

  const handleCheckout = () => {
    dispatch(clearCart()); // Очищаем корзину после покупки
    alert("Спасибо за покупку!");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "")) || 0;
      return total + price * item.quantity; // Учитываем количество
    }, 0);
  };

  return (
    <div className={css.container}>
      <div className={css.cart}>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={css.cartItem}>
                {item.title} - {item.price} x {item.quantity} = $
                {(
                  parseFloat(item.price.replace("$", "")) * item.quantity
                ).toFixed(2)}
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className={css.removeButton}
                >
                  Уменьшить
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
            <button className={css.checkoutButton} onClick={handleCheckout}>
              Оформить заказ
            </button>
          </>
        )}
      </div>
    </div>
  );
}
