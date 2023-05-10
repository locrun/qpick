import { FC } from "react";
import { useCart } from "react-use-cart";
import star from "../../assets/star.svg";
import s from "./ProductCard.module.scss";

export interface IProduct {
  item: {
    id: string;
    title: string;
    price: number;
    oldPrice?: number;
    rate: number;
    img: string;
  }
}

export const ProductCard: FC<IProduct> = ({ item }) => {

  const { addItem } = useCart();
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src={item.img} alt="product" />
      </div>
      <div className={s.flex}>
        <div className={s.flexCol}>
          <h4 className={s.title}>{item.title}</h4>
          <div className={s.rating}>
            <img src={star} alt="rating" />
            <span>{item.rate}</span>
          </div>
        </div>
        <div className={s.flexCol}>
          <div className={s.price}>{item.price} &#8381;
            {item.oldPrice &&
              <span className={s.oldPrice}>{item.oldPrice} &#8381;</span>
            }
          </div>
          <button onClick={() => addItem(item)} className={s.buy} >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};
