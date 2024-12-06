import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./GalleryPage.module.css";
import images from "../../date/date.json";

export default function GalleryPage() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const handleAddToCart = (id) => {
    const item = images.find((image) => image.id === id);
    dispatch(addItemToCart(item));
    toast.success(`${item.title} добавлен в корзину!`);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <div className={css.container}>
      <ToastContainer />
      <h1 className={css.title}>Сatalog</h1>

      <div className={css.filterButtons}>
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("standard")}>Standard</button>
        <button onClick={() => handleFilterChange("pro")}>Pro</button>
      </div>

      <div className={css.grid}>
        {filteredImages.map(({ id, src, title, price }) => (
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
    </div>
  );
}
