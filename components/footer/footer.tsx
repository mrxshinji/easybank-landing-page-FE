import Image from "next/image";
import CtaBtn from "../ctaBtn/ctaBtn";
import SectionWrapper from "../sectionWrapper/sectionWrapper";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <SectionWrapper>
      <div className={styles.container}>
        <Image className={styles.logo} src={"/static/footer-logo.svg"} alt='logo' width={200} height={32} />
        <div className={styles.iconsWrapper}>
          <a href='https://example.com/'>
            <Image src={"/static/icon-facebook.svg"} alt='facebook icon' width={28} height={28} />
          </a>
          <a href='https://example.com/'>
            <Image src={"/static/icon-youtube.svg"} alt='youtube icon' width={28} height={28}  />
          </a>
          <a href='https://example.com/'>
            <Image src={"/static/icon-twitter.svg"} alt='twitter icon' width={28} height={28}  />
          </a>
          <a href='https://example.com/'>
            <Image src={"/static/icon-pinterest.svg"} alt='pinterest icon' width={28} height={28}  />
          </a>
          <a href='https://example.com/'>
            <Image src={"/static/icon-instagram.svg"} alt='instagram icon' width={28} height={28}  />
          </a>
        </div>
        <div className={styles.footerNav}>
          <nav className={styles.navWrapper}>
            <ul className={styles.navMenu}>
              <li className={styles.navItem}> About Us </li>
              <li className={styles.navItem}> Contact </li>
              <li className={styles.navItem}> Blog </li>
              <li className={styles.navItem}> Careers </li>
              <li className={styles.navItem}> Support </li>
              <li className={styles.navItem}> Privacy Policy </li>
            </ul>
          </nav>
        </div>
        <CtaBtn className={styles.ctaBtn} />
        <p className={styles.copyright}>© Easybank. All Rights Reserved</p>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
