import Image from "next/image";
import { useState, MouseEvent } from "react";
import CtaBtn from "../ctaBtn/ctaBtn";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggleDropdown = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setToggleDropdown(!toggleDropdown);
    console.log(toggleDropdown)
  };

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.logoWrapper}>
          <Image
            src={"/static/logo.svg"}
            alt='Easybank Logo'
            className={styles.logo}
            fill
          />
        </div>

        <div className={styles.navbar}>
          <nav className={styles.navbarWrapper}>
            <ul className={styles.navbarMenu}>
              <li className={styles.navbarItem}> Home </li>
              <li className={styles.navbarItem}> About </li>
              <li className={styles.navbarItem}> Contact </li>
              <li className={styles.navbarItem}> Blog </li>
              <li className={styles.navbarItem}> Careers </li>
            </ul>
          </nav>
        </div>
        

        <div className={styles.toggle}>
          <div className={styles.hamburgerWrapper} onClick={(e) => handleToggleDropdown(e)}>
            <button
              type='button'
              className={styles.button}
            >
              <Image
                src={
                  !toggleDropdown
                    ? "/static/icon-hamburger.svg"
                    : "/static/icon-close.svg"
                }
                alt='Easybank Logo'
                fill
              />
            </button>
          </div>
        </div>
        <CtaBtn className={styles.ctaBtn} />
      </div>

      {toggleDropdown && (
        <>
          <div className={styles.dropdown}>
            <nav className={styles.navWrapper}>
              <ul className={styles.navMenu}>
                <li className={styles.navItem}> Home </li>
                <li className={styles.navItem}> About </li>
                <li className={styles.navItem}> Contact </li>
                <li className={styles.navItem}> Blog </li>
                <li className={styles.navItem}> Careers </li>
              </ul>
            </nav>
          </div>
          <div className={styles.blurOverlay}></div>
        </>
      )}
    </div>
  );
};

export default Navbar;
