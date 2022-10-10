import Image from "next/image";
import styles from "./styles/UpNext.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function UpNext({ image, time, description, subText }) {
  return (
    <div className={styles.nextMovieSection}>
      {/* Image */}
      <div className={styles.upNextPosterContainer}>
        <Image src={image} layout="fill" objectFit="cover" />
      </div>

      {/* Video Text */}
      <div className={styles.upNextVideoText}>
        {/* PLayIcon and time */}
        <div className={styles.nextPlayBox}>
          <div className={styles.upNextPlayIconContainer}>
            <PlayArrowIcon />
          </div>
          <span>{time}</span>
        </div>
        {/* Description */}
        <span className={styles.upNextDescriptionText}>{description}</span>
        {/* Subtext */}
        <span className={styles.upNextSubtitle}>{subText}</span>
      </div>
    </div>
  );
}
