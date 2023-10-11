'use client'

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import Burger from "../Burger/Burger";
import { useState } from "react";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.header__links}>
          Home
        </Link>
        <Link href="/about" className={styles.header__links}>
          About
        </Link>
      </nav>
      <div className={styles.main}>
        <Link href="/">
          <Image
            src="../main-logo.svg"
            width={155}
            height={20}
            alt="Picture of the author"
          ></Image>
        </Link>
        <div className={styles.icon__menu}>
          <Link href="google.com">
            <Image
              src="../map-logo.svg"
              width={32}
              height={32}
              alt="Picture of the author"
            ></Image>
          </Link>
          <button type="button" onClick={toggleMenu}>
            <Image
              src="../burger-menu-logo.svg"
              width={32}
              height={32}
              alt="Picture of the author"
            ></Image>
          </button>
          <Burger isOpen={isMenuOpen} toggleMenu={toggleMenu}></Burger>
        </div>
      </div>
    </header>
  );
};

export default Header;
