import { FC } from "react";

import { useCart } from "react-use-cart";
import { BasketCard } from "../../components/BasketCard/BasketCard";
import s from "./Basket.module.scss";

interface IBasketProps {
  id: string,
  img: string,
  itemTotal: number,
  oldPrice?: number,
  price: number,
  quantity: number,
  rate: number,
  title: string
};


export const Basket: FC = () => {
  const { isEmpty, items, cartTotal } = useCart();

  if (isEmpty) return <h2 className={s.alert}>Добавьте товары в корзину</h2>;

  return (
    <>
      <div className={s.basket}>Корзина</div>
      <section className={s.container}>
        <div className={s.cardWrapper}>
          {
            items.map((item: any) => {
              return <BasketCard key={item.id} item={item} />;
            })
          }
        </div>
        {
          !isEmpty &&
          <div className={s.order}>
            <div className={s.totalPrice}>
              &#8381; {cartTotal}
            </div>
            <button className={s.orderBtn}>
              Перейти к оформлению
            </button>
          </div>
        }
      </section>
    </>
  );
};

