import styles from "./landing.module.css";

import SectionWrapper from "../sectionWrapper/sectionWrapper";
import Image from "next/image";
import CtaBtn from "../ctaBtn/ctaBtn";

const Landing = () => {
  return (
    <SectionWrapper>
      <div className={styles.landingWrapper}>
        <div className={styles.introWrapper}>
          <picture>
            <source
              media='(min-width:465px)'
              srcSet='/static/bg-intro-desktop.svg'
            />
            <img
              className={styles.bg}
              src='/static/bg-intro-mobile.svg'
              alt='Section intro background'
            />
          </picture>
        </div>

        <div className={styles.mockupWrapper}>
          <Image
            className={styles.mockup}
            src={"/static/image-mockups.png"}
            alt='Intro with phones'
            fill
          />
        </div>

        <div className={styles.text}>
          <h1>Next generation digital banking</h1>
          <p>
            <span className={styles.highlight}>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </span>
          </p>
          <CtaBtn className={styles.ctaBtn} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Landing;
