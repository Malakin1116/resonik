import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import images from "../../date/date.json";
import css from "./ProGallery.module.css";

export default function ProGallery() {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    const item = images.find((image) => image.id === id);
    dispatch(addItemToCart(item));
    toast.success(`${item.title} добавлен в корзину!`);
  };

  const proItems = images.filter((item) => item.category === "pro");

  return (
    <div className={css.grid}>
      <ToastContainer position="top-right" style={{ marginTop: "72px" }} />
      {proItems.map(({ id, src, title, price, description }) => (
        <div key={id} className={css.card}>
          <img src={src} alt={title} className={css.image} />
          <div className={css.info}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.description}>{description}</p>
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
