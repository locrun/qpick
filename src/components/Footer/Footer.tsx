import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ball from "../../assets/ball.svg";
import vk from "../../assets/vk.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import cn from "classnames";
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

const socialData = [
  {
    id: 0,
    alt: "vk",
    icon: vk
  },
  {
    id: 1,
    alt: "telegram",
    icon: telegram
  },
  {
    id: 2,
    alt: "whatsapp",
    icon: whatsapp
  },
];

const langData = [
  {
    id: 0,
    name: "Каз",
  },
  {
    id: 1,
    name: "Рус",

  },
  {
    id: 2,
    name: "Eng",

  },
];

export const Footer: FC = () => {
  const [active, setActive] = useState(1);
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
          {
            langData.map((item) => {
              return (
                <button key={item.id} onClick={() => setActive(item.id)}
                  className={cn(s.lang, {
                    [s.active]: item.id === active
                  })}>{item.name}</button>
              );
            })
          }
        </div>
      </div>
      <div className={s.social}>
        {socialData.map((item) => {
          return (
            <div key={item.id} className={s.icon}>
              <img src={item.icon} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </footer>
  );
};