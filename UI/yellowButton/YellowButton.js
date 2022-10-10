import styles from "./styles/yellowButton.module.css";
import Link from "next/link";

export default function YellowButton({
  url = "/",
  text = "IMDB",
  action = null,
}) {
  return (
    <div onClick={action} className={styles.logoContainer}>
      <Link href={url}>
        <span className={styles.logoText}>{text}</span>
      </Link>
    </div>
  );
}
