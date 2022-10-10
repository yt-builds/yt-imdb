import FeatureList from "./FeatureList";
import styles from "./styles/Feature.module.css";

export default function Feature() {
  return (
    <div className={styles.featureContaienr}>
      <h1>Feature Today</h1>
      {/* List Component Here */}
      <FeatureList />
    </div>
  );
}
