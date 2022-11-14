import SectionWrapper from "../sectionWrapper/sectionWrapper";
import styles from "./section1.module.css";

import SectionOneItem from "./sectionOneItem";

import sectionOneText from "./section1Text.json";

export const SectionOne = () => {
  return (
    <SectionWrapper>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Why choose Easybank?</h2>
          <p>We leverage Open banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        {sectionOneText.map((item, idx) => {
          return <SectionOneItem key={idx} title={item.title} body={item.body} logo={item.logo} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default SectionOne;
