import { FC } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import favorite from "../../assets/favorite.svg";
import basket from "../../assets/basket.svg";
import s from "./Header.module.scss";

export const Header: FC = () => {
  const { totalUniqueItems } = useCart();
  return (
    <header className={s.header}>
      <Link to="/">
        <div className={s.logo}>QPICK</div>
      </Link>
      <div className={s.flex}>
        <Link to="/favorite" className={s.favorite}>
          <img src={favorite} alt="favorite" />
          <span className={s.count}>{1}</span>
        </Link>
        <Link to="/basket" className={s.basket}>
          <img src={basket} alt="basket" />
          {
            totalUniqueItems > 0 &&
            <span className={s.count}>{totalUniqueItems}</span>
          }
        </Link>
      </div>
    </header>
  );
};
