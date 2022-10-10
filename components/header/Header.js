import styles from "./style/header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import Logo from "../logo/Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import db from "../../firebase";
import { useEffect } from "react";

export default function Header() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const registerNewUser = async () => {
        // Check if user exists
        const check = (
          await db.collection("register").doc(session.user.email).get()
        ).exists;

        if (!check) {
          db.collection("register").doc(session.user.email).set({
            name: session.user.name,
            email: session.user.email,
            profile: session.user.image,
          });
        }
      };

      registerNewUser();
    }
  }, [session]);

  return (
    <section className={styles.headerSection}>
      <div className={styles.headerContainer}>
        {/* Mobile Responsive Menu */}
        <div className={styles.responsiveMenuIcon}>
          <MenuIcon className={styles.icon} />
        </div>

        {/* Logo */}
        <Logo />

        {/* Menu - Desktop and Tablet */}
        <div className={styles.IconContainer}>
          <MenuIcon className={styles.icon} />
          <span>Menu</span>
        </div>

        {/* Search Input */}
        <div className={styles.headerSearchContainer}>
          {/* Dropdown all */}
          <div className={styles.headerDropdownAll}>
            <span>All</span>
            <ArrowDropDownIcon className={styles.arrowDropDownIcon} />
          </div>
          {/* Search Input and Icon */}
          <div className={styles.headerSearch}>
            <input type="text" placeholder="Search IMDb" />
            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>

        {/* Mobile Responsive Search */}
        <div className={styles.responsiveSearchIcon}>
          <SearchIcon className={styles.searchIcon} />
        </div>

        {/* IMDb Pro */}
        <div className={styles.headerProContainer}>
          <span>IMDB</span>
          <span className={styles.headerProSpan}>Pro</span>
        </div>

        {/* Vertical Line */}
        <div className={styles.verticalLine}></div>

        {/* Watchlist */}
        <Link href="/watchlist">
          <div
            className={`${styles.IconContainer} ${styles.responsiveWatchListContainer}`}
          >
            <BookmarkAddIcon className={styles.icon} />
            <span className={styles.watchListText}>Watchlist</span>
          </div>
        </Link>

        {/* Sign In */}
        <div
          onClick={!session ? signIn : signOut}
          className={styles.signInContainer}
        >
          <span>
            {session ? `👋${session?.user?.name?.split(" ")[0]}` : "Sign In"}
          </span>
        </div>

        {/* Languages */}
        <div className={styles.languageContaienr}>
          <span>EN</span>
        </div>
      </div>
    </section>
  );
}
