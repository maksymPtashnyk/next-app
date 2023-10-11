"use client";

import { useEffect } from "react";
import styles from "./Burger.module.scss";
import Image from "next/image";
import Link from "next/link";

const Burger = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.overflow__hidden);
    } else {
      document.body.classList.remove(styles.overflow__hidden);
    }
  }, [isOpen]);

  return (
    <aside className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.burgerMenu__header}>
        <Link href="/">
          <Image
            src="../main-logo.svg"
            width={155}
            height={20}
            alt="Picture of the author"
          ></Image>
        </Link>
        <div className={styles.burgerMenu__header__buttons}>
          <Link href="google.com">
            <Image
              src="../map-logo.svg"
              width={32}
              height={32}
              alt="Picture of the author"
            ></Image>
          </Link>
          <button onClick={toggleMenu} className={styles.menuButton}>
            <Image
              src="../burger-close.svg"
              width={32}
              height={32}
              alt="Picture of the author"
            ></Image>
          </button>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li>
            <Link href="/" className={styles.nav__list__link}>
              Магазины
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.nav__list__link}>
              Рестораны
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.nav__list__link}>
              Развлечения
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.nav__list__link}>
              Анонсы
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.nav__list__link}>
              Контакты
            </Link>
          </li>
        </ul>

        <div className={styles.nav__map}>
            <Image src="/logo-cart.png" width={29} height={24} alt="logo" />
            <p className={styles.nav__map__text}>
              Карта Молла
            </p>
        </div>
      </nav>

      <div className={styles.burgerMenu__footer}>
        <button>RO</button>
        <button>RU</button>
        <button>EN</button>
      </div>
    </aside>
  );
};

export default Burger;
