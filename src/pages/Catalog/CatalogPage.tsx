import { FC } from "react";
import { CatalogCard } from "../../components/CatalogCard/CatalogCard";
import { products } from "../../data/products";
import s from "./Catalog.module.scss";

export const Catalog: FC = () => {

  return (
    <>
      <div className={s.category}>Наушники</div>
      <section className={s.grid}>
        {
          products.filter((item) => item.type !== "Беспроводные")
            .map((item) => <CatalogCard key={item.id} product={item} />
            )
        }
      </section>
      <div className={s.category}>Беспроводные наушники</div>
      <section className={s.grid}>
        {
          products.filter((item) => item.type === "Беспроводные")
            .map((item) => <CatalogCard key={item.id} product={item} />
            )
        }
      </section>
    </>
  );
};
