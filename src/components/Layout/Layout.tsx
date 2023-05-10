import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout: FC = () => {
  return (
    <div className="container">
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div >
  );
};
