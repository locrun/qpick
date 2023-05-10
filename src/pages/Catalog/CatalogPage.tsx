import { FC } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";
import s from "./Catalog.module.scss";

export const Catalog: FC = () => {
  return (
    <>
      <div className={s.category}>Наушники</div>
      <section className={s.grid}>
        {
          products.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })
        }
      </section>
    </>
  );
};
