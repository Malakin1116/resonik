import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import images from "../../date/date.json";
import css from "./StandardGallery.module.css";

export default function StandardGallery() {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    const item = images.find((image) => image.id === id);
    dispatch(addItemToCart(item));
    toast.success(`${item.title} добавлен в корзину!`);
  };

  const standardItems = images.filter((item) => item.category === "standard");

  return (
    <div className={css.grid}>
      <ToastContainer position="top-right" style={{ marginTop: "72px" }} />
      {standardItems.map(({ id, src, title, price }) => (
        <div key={id} className={css.card}>
          <img src={src} alt={title} className={css.image} />
          <div className={css.info}>
            <h2 className={css.title}>{title}</h2>
            <h3 className={css.price}>{price}</h3>
            <button
              className={css.buyButton}
              onClick={() => handleAddToCart(id)}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
