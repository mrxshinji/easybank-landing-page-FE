import React from "react";
import styles from "./sectionWrapper.module.css";

type Props = {
  children: JSX.Element;
};

const SectionWrapper: React.FC<Props> = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default SectionWrapper;
