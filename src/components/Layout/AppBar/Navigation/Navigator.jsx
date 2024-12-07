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
    <nav role="navigation" aria-label="Main Navigation">
      <ul className={css.ul}>
        <li className={css.li}>
          <NavLink
            to="/"
            className={getNavLinkClass}
            end
            aria-label="Go to Home"
          >
            <FaHome className={css.icon} aria-hidden="true" />
            <span className={css.text}>Home</span>
          </NavLink>
        </li>

        <li className={css.li}>
          <NavLink
            to="/catalog/standard"
            className={() => clsx(css.link, isCatalogActive && css.isActive)}
            aria-label="Go to Catalog"
          >
            <FaImages className={css.icon} aria-hidden="true" />
            <span className={css.text}>Catalog</span>
          </NavLink>
        </li>

        <li className={css.li}>
          <NavLink
            to="/cart"
            className={getNavLinkClass}
            aria-label="Go to Cart"
          >
            <FaShoppingCart className={css.icon} aria-hidden="true" />
            {totalItems > 0 && (
              <span
                className={css.cartBadge}
                aria-label={`Cart has ${totalItems} items`}
              >
                {totalItems}
              </span>
            )}
            <span className={css.text}>Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
