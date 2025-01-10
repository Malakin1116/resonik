import { Outlet, NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.div_artist}>
        <img
          src="/Hero/resonik_transparent.png"
          alt="RESONIK logo - High-Quality Silencers"
          className={css.artistPhoto}
        />
        <h1 className={css.artistName}>RESONIK</h1>
      </div>

      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              to="catalog/standard"
              className={css.navLink}
              aria-label="Go to Standard Silencers Catalog"
            >
              <img
                src="/Icons/avto.png"
                alt="Standard Silencers Icon"
                className={css.navIcon}
              />
              <h2 className={css.h2}>Стандарт .223 .308</h2>
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/catalog/pro"
              className={css.navLink}
              aria-label="Go to PRO Silencers Catalog"
            >
              <img
                src="/Icons/shipe.png"
                alt="PRO Silencers Icon"
                className={css.navIcon}
              />
              <h2 className={css.h2}>Інтегра .223 .308 .338</h2>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
