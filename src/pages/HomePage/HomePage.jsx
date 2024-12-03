import { Outlet, NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <img src="/Hero/newRes.png" alt="RESONIK" className={css.artistPhoto} />
      <h1 className={css.artistName}>RESONIK</h1>

      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/gallery" className={css.navLink}>
            <img
              src="/Icons/avto.png"
              alt="Gallery Icon"
              className={css.navIcon}
            />
            <h3 className={css.h3}>.223 .308</h3>
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="/gallery" className={css.navLink}>
            <img
              src="/Icons/shipe.png"
              alt="Other Icon"
              className={css.navIcon}
            />
            <h3 className={css.h3}> .223 .308 .338</h3>
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
