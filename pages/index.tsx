import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar/navbar";
import Landing from "../components/landing/landing";
import SectionOne from "../components/section1/section1";
import Articles from "../components/articles/articles";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Easybank Landing Page</title>
        <meta
          name='description'
          content='Frontend mentor challenge using Next js'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Landing />
        <SectionOne />
        <Articles />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
