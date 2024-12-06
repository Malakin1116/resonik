import { Outlet, NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.div_artist}>
        <img
          src="/Hero/resonik_transparent.png"
          alt="RESONIK"
          className={css.artistPhoto}
        />
        <h1 className={css.artistName}>RESONIK</h1>
      </div>

      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/catalog" className={css.navLink}>
            <img
              src="/Icons/avto.png"
              alt="Gallery Icon"
              className={css.navIcon}
            />
            <h2 className={css.h2}>Silencer .223 .308</h2>
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="/catalog" className={css.navLink}>
            <img
              src="/Icons/shipe.png"
              alt="Other Icon"
              className={css.navIcon}
            />
            <h2 className={css.h2}>Silencer .223 .308 .338</h2>
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
