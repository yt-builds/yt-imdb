import styles from "./styles/WhatToWatch.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WatchList from "./WatchList";

export default function WhatToWatch() {
  return (
    <div className={styles.whatToWatchContainer}>
      <div className={styles.getRecomendation}>
        <h1>WhatToWatch</h1>
        <span className={styles.customRecomendation}>
          Get more recomendations {<ChevronRightIcon />}
        </span>
      </div>
      <div>
        <h4 className={styles.topPicks}>
          Top Picks {<ChevronRightIcon className={styles.rightIcon} />}
        </h4>
        <span className={styles.topPicksSubText}>
          TV shows and movies for you
        </span>
      </div>
      {/* Lists */}
      <WatchList />
    </div>
  );
}
