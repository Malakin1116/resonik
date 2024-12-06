import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; 
import clsx from "clsx";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("menu-open", !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <>
      <button
        className={css.burger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <FaTimes className={css.icon} />
        ) : (
          <FaBars className={css.icon} />
        )}
      </button>

      <div
        className={clsx(css["menu-container"], isMenuOpen && css["is-open"])}
      >
        <ul className={css["menu-list"]}>
          <li className={css.li}>
            <NavLink
              to="/login"
              className={css["menu-link"]}
              onClick={closeMenu}
            >
              <FaSignInAlt className={css.icon} />
              <span className={css.text}>Sign In</span>
            </NavLink>
          </li>
          <li className={css.li}>
            <NavLink
              to="/register"
              className={css["menu-link"]}
              onClick={closeMenu}
            >
              <FaUserPlus className={css.icon} />
              <span className={css.text}>Sign Up</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
