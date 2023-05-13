import { FC } from "react";
import { useCart } from "react-use-cart";
import star from "../../assets/star.svg";
import s from "./CatalogCard.module.scss";

export interface IProduct {
  product: {
    id: string;
    title: string;
    price: number;
    oldPrice?: number;
    type?: string;
    quantity: number,
    rate: number;
    img: string;
  }
}


export const CatalogCard: FC<IProduct> = ({ product }) => {

  const { addItem } = useCart();
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src={product.img} alt="product" />
      </div>
      <div className={s.flex}>
        <div className={s.flexCol}>
          <h4 className={s.title}>{product.title}</h4>
          <div className={s.rating}>
            <img src={star} alt="rating" />
            <span>{product.rate}</span>
          </div>
        </div>
        <div className={s.flexCol}>
          <div className={s.price}>{product.price} &#8381;
            {product.oldPrice &&
              <span className={s.oldPrice}>{product.oldPrice} &#8381;</span>
            }
          </div>
          <button onClick={() => addItem(product)} className={s.buy} >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};
