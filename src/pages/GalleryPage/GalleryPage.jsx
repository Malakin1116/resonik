import { NavLink, Outlet } from "react-router-dom";
import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Catalog</h1>
      <div className={css.filterButtons}>
        <NavLink
          to="standard"
          className={({ isActive }) =>
            isActive
              ? `${css.filterButton} ${css.activeButton}`
              : css.filterButton
          }
        >
          Standard
        </NavLink>
        <NavLink
          to="pro"
          className={({ isActive }) =>
            isActive
              ? `${css.filterButton} ${css.activeButton}`
              : css.filterButton
          }
        >
          Pro
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
