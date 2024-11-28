import { Outlet } from "react-router-dom";

import AppBar from "./AppBar/AppBar";
import Footer from "./AppBar/Footer/Footer";

export default function Layout() {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
