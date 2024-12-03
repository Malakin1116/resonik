import { Outlet, NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${css.navLink} ${css.active}` : css.navLink;

  return (
    <div className={css.container}>
      <img src="/Hero/SG2.png" alt="RESONIK" className={css.artistPhoto} />
      <h1 className={css.artistName}>RESONIK</h1>
      <NavLink to="/gallery" className={getNavLinkClass}>
        Gallery
      </NavLink>
      <Outlet />
    </div>
  );
}
