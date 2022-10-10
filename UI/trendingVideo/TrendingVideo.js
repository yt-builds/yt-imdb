import { style } from "@mui/system";
import Image from "next/image";
import styles from "./styles/TrendingVideo.module.css";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import JohnWick from "../../components/trending/assests/JohnWick.jpg";
import JohnWickPoster from "../../components/trending/assests/JohnWickPoster.jpg";
import { Timeline } from "@mui/icons-material";

export default function TrendingVideo({
  image,
  poster,
  description,
  subText,
  time,
}) {
  return (
    <div className={styles.videoFeatureBox}>
      {/* Image Container */}
      <div className={styles.imageContaienr}>
        {image && <Image src={image} priority />}
      </div>

      {/* shadow effect */}
      <div className={styles.shadowEffect}></div>

      {/* Description Container */}
      <div className={styles.descriptionContaienr}>
        <div className={styles.hop}>
          <BookmarkAddIcon className={styles.addtoWishIcon} />
          <div className={styles.posterImage}>
            {poster && <Image src={poster} layout="fill" objectFit="contain" />}
          </div>
        </div>
        <div className={styles.filmDescriptonContainer}>
          <div className={styles.playIconContainer}>
            <PlayArrowIcon />
          </div>
          <div className={styles.filmNameContainer}>
            <span>{description}</span>
            <span>{subText}</span>
          </div>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
