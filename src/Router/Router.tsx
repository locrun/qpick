import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Basket } from "../pages/Basket/Basket";
import { Catalog } from "../pages/Catalog/CatalogPage";
import { Layout } from "../components/Layout/Layout";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path={"/basket"} element={<Basket />} />
          <Route path={"*"} element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};



