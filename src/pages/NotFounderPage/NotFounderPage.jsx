import { Link } from "react-router-dom";
import css from "./NotFounderPage.module.css";

export default function NotFounderPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <p className={css.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className={css.link}>
        Go to Home
      </Link>
    </div>
  );
}
