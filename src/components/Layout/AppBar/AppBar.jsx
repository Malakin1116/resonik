import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigator";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import { selectUserDataIsLoggedIn } from "../../../redux/auth/selectors";

import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <h2 className={css.art_angelina}>ArtAngelina</h2>
        <ul className={css.ul}>
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </ul>
      </nav>
    </header>
  );
}
