import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

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
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      <div
        className={clsx(css["menu-container"], isMenuOpen && css["is-open"])}
      >
        <ul className={css["menu-list"]}>
          <li className={css["menu-item"]}>
            <NavLink
              to="/login"
              className={css["menu-link"]}
              onClick={closeMenu}
            >
              SignIn
            </NavLink>
          </li>
          <li className={css["menu-item"]}>
            <NavLink
              to="/register"
              className={css["menu-link"]}
              onClick={closeMenu}
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
