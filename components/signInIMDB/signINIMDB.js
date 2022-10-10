import styles from "./styles/styles.module.css";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import YellowButton from "../../UI/yellowButton/YellowButton";
import { signIn } from "next-auth/react";

export default function SignINIMDB() {
  return (
    <div className={styles.container}>
      <div>
        <BookmarkAddIcon />
        <h4>Sign in to access your Watchlist</h4>
        {/* Button */}
        <YellowButton url="" text={"Sign In"} action={signIn} />
      </div>
    </div>
  );
}
