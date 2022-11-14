import SectionWrapper from "../sectionWrapper/sectionWrapper";
import styles from "./articles.module.css";

import Article from "./article";

import articlesData from "./articles.json";

export const Articles = () => {
  return (
    <SectionWrapper>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest Articles</h2>
        {articlesData.map((item, idx) => {
          return <Article key={idx} author={item.author} title={item.title} body={item.body} image={item.image} alt={item.alt} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Articles;
