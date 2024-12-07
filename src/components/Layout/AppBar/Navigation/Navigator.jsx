import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaImages, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.link, isActive && css.isActive);

export default function Navigation() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const location = useLocation();

  const isCatalogActive = location.pathname.startsWith("/catalog");

  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <NavLink to="/" className={getNavLinkClass} end>
          <FaHome className={css.icon} />
          <span className={css.text}>Home</span>
        </NavLink>
      </li>

      <li className={css.li}>
        <NavLink
          to="/catalog/standard"
          className={() => clsx(css.link, isCatalogActive && css.isActive)}
        >
          <FaImages className={css.icon} />
          <span className={css.text}>Catalog</span>
        </NavLink>
      </li>

      <li className={css.li}>
        <NavLink to="/cart" className={getNavLinkClass}>
          <FaShoppingCart className={css.icon} />
          {totalItems > 0 && (
            <span className={css.cartBadge}>{totalItems}</span>
          )}
          <span className={css.text}>Cart</span>
        </NavLink>
      </li>
    </ul>
  );
}
