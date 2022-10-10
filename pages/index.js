import Banner from "../components/banner/Banner";
import Feature from "../components/featureToday/Feature";
import Trending from "../components/trending/Trending";
import WhatToWatch from "../components/whatToWatch/WhatToWatch";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.Container}>
      <main className={styles.Main}>
        <Banner />
        <Trending />
        <Feature />
        <WhatToWatch />
      </main>
    </div>
  );
}
