import { FC } from "react";
import { useCart } from "react-use-cart";

import deleteIcon from "../../assets/delete.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

import { IProduct } from "../ProductCard/ProductCard";

import s from "./BasketCard.module.scss";


interface IBasketProps {
  item: {
    id: string,
    img: string,
    itemTotal: number,
    oldPrice?: number,
    price: number,
    quantity: number,
    rate: number,
    title: string
  }
};


export const BasketCard: FC<IBasketProps> = ({ item }) => {

  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart, } = useCart();

  return (
    <div className={s.card}>
      <div className={s.flexCol}>
        <div className={s.flex}>
          <div className={s.image}>
            <img src={item.img} alt="product" />
          </div>
          <div style={{ maxWidth: "377px" }}>
            <h4 className={s.title}>{item.title}</h4>
            <div className={s.price}>{item.price} &#8381;</div>
          </div>
        </div>
        <div className={s.buttons}>
          <button
            className={s.decrease}
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            <img src={minus} alt="minus" />
          </button>
          <span>{item.quantity}</span>
          <button
            className={s.increase}
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
      <div className={s.flCol}>
        <button
          onClick={() => removeItem(item.id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <div className={s.bottomPrice}>{item.price} &#8381;</div>
      </div>
    </div>
  );
};

