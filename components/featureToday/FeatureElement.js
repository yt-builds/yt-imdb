import Image from "next/image";
import styles from "./styles/FeatureElement.module.css";

export default function FeatureElement({
  image,
  icon,
  iconText,
  movieCardText,
  nextImage,
  nextIcon,
  nextIconText,
  nextMovieCardText,
  lastImage,
  lastIcon,
  lastIconText,
  lastMovieCardText,
}) {
  return (
    <div className={styles.oneBigCardContainer}>
      {/* One Card */}
      <div className={styles.featureVideoCard}>
        <div className={styles.resImageContainer}>
          <Image src={image} />
        </div>
        <div className={styles.iconText}>
          {icon}
          <span>{iconText}</span>
        </div>
        <div className={styles.featureVideoText}>
          <span>{movieCardText}</span>
        </div>
      </div>
      {/* Second Card */}
      <div className={styles.featureVideoCard}>
        <div className={styles.resImageContainer}>
          <Image src={nextImage} />
        </div>
        <div className={styles.iconText}>
          {nextIcon}
          <span>{nextIconText}</span>
        </div>
        <div className={styles.featureVideoText}>
          <span>{nextMovieCardText}</span>
        </div>
      </div>
      {/* Third Crad */}
      <div className={styles.featureVideoCard}>
        <div className={styles.resImageContainer}>
          <Image src={lastImage} />
        </div>
        <div className={styles.iconText}>
          {lastIcon}
          <span>{lastIconText}</span>
        </div>
        <div className={styles.featureVideoText}>
          <span>{lastMovieCardText}</span>
        </div>
      </div>
    </div>
  );
}
