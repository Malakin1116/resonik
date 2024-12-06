import { Link, Outlet } from "react-router-dom";
import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Catalog</h1>
      <div className={css.filterButtons}>
        <Link to="standard">
          <button className={css.filterButton}>Standard</button>
        </Link>
        <Link to="pro">
          <button className={css.filterButton}>Pro</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
