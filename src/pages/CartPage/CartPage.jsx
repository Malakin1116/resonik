import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, clearCart } from "../../redux/cart/slice";
import css from "./CartPage.module.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    alert("Thank you for your purchase!");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "")) || 0;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className={css.container}>
      <div className={css.cart}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
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
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <div className={css.total}>
              Total Price: ${getTotalPrice().toFixed(2)}
            </div>
            <button className={css.checkoutButton} onClick={handleCheckout}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
