import { FC } from "react";
import { useCart } from "react-use-cart";

import deleteIcon from "../../assets/delete.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

import { IProduct } from "../CatalogCard/CatalogCard";

import s from "./BasketCard.module.scss";


export const BasketCard: FC<IProduct> = ({ product }) => {

  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className={s.card}>
      <div className={s.flex}>
        <div className={s.image}>
          <img src={product.img} alt="product" />
        </div>
        <div className={s.group}>
          <h4 className={s.title}>{product.title}</h4>
          <div className={s.price}>{product.price} &#8381;</div>
        </div>
        <button
          className={s.remove}
          onClick={() => removeItem(product.id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
      <div className={s.flex}>
        <div className={s.buttons}>
          <button
            className={s.decrease}
            onClick={() => updateItemQuantity(product.id, product.quantity - 1)}
          >
            <img src={minus} alt="minus" />
          </button>
          <span>{product.quantity}</span>
          <button
            className={s.increase}
            onClick={() => updateItemQuantity(product.id, product.quantity + 1)}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
        <div className={s.bottomPrice}>{product.price} &#8381;</div>
      </div>
    </div>
  );
};

