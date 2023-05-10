import { FC } from "react";
import { Link } from "react-router-dom";
import ball from "../../assets/ball.svg";
import vk from "../../assets/vk.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import s from "./Footer.module.scss";

const navData = [
  {
    id: 0,
    name: "Избранное",
    path: "/favorite"
  },
  {
    id: 1,
    name: "Корзина",
    path: "/basket"
  },
  {
    id: 2,
    name: "Контакты",
    path: "/contacts"
  },
];

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <Link to="/">
        <div className={s.logo}>QPICK</div>
      </Link>
      <nav className={s.nav}>
        <ul className={s.navList}>
          {navData.map((item) => {
            return (
              <li key={item.id} className={s.navListItem}>
                <Link to={item.path} >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={s.service}>
        <span>Условия сервиса</span>
        <div className={s.switchLang}>
          <img src={ball} alt="ball" />
          <span className={s.lang}>Каз</span>
          <span className={s.lang}>Рус</span>
          <span className={s.lang}>Eng</span>
        </div>
      </div>
      <div className={s.social}>
        <img className={s.icon} src={vk} alt="vk" />
        <img className={s.icon} src={telegram} alt="telegram" />
        <img className={s.icon} src={whatsapp} alt="whatsapp" />
      </div>
    </footer>
  );
};