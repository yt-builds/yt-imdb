import styles from "./styles/IndividualList.module.css";
import Image from "next/image";
// Iocns
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DoneIcon from "@mui/icons-material/Done";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import db from "../../firebase";
import { useSession } from "next-auth/react";
import {
  addMovieToWatchList,
  delteMovieFromWatchList,
} from "../../service/watchlistService";

export default function IndividualList({
  id,
  posterImage,
  rating,
  filmName,
  watchListMovie,
}) {
  const { data: session } = useSession();

  let isAddedToWatchList = watchListMovie?.[0]?.addedMovieId === id;
  let addedMovieDocId = watchListMovie?.[0]?.docId;

  const addToWatchList = () => {
    const docId = db
      .collection(`register/${session?.user?.email}/watchlist`)
      .doc().id;

    const newObject = {
      addedMovieId: id,
      posterImage,
      rating,
      filmName,
      docId,
    };

    addMovieToWatchList(
      `register/${session?.user?.email}/watchlist`,
      docId,
      newObject
    );
  };

  const deleteFromWatchList = () => {
    delteMovieFromWatchList(
      `register/${session?.user?.email}/watchlist`,
      addedMovieDocId
    );
  };

  const handler = (e) => {
    e.preventDefault();

    !session
      ? alert("Please sign in to access watchlist feature")
      : !isAddedToWatchList
      ? addToWatchList()
      : deleteFromWatchList();
  };

  return (
    // Container
    <div>
      {/* a card container */}
      <div className={styles.OneCard}>
        {/* Image Container */}
        <div className={styles.imageContainer}>
          {/* Bookmark icon */}
          <BookmarkAddIcon className={styles.bookmarkIcon} />
          {/* Image */}
          <div className={styles.posterContainer}>
            <Image src={posterImage} layout="fill" objectFit="cover" />
          </div>
        </div>
        {/* Description Div */}
        <div className={styles.descriptionContainer}>
          {/* Rating and Star */}
          <div className={styles.ratingStar}>
            <StarRateIcon className={styles.starIcon} />
            <span>{rating}</span>
          </div>
          {/* Name */}
          <div className={styles.filmNameContaienr}>
            <span>{filmName}</span>
          </div>
          {/* WatchList */}
          <div onClick={handler} className={styles.watchListButton}>
            {isAddedToWatchList ? (
              <>
                <DoneIcon className={styles.addIcon} />
                <span>Added</span>
              </>
            ) : (
              <>
                <AddIcon className={styles.addIcon} />
                <span>Watchlist</span>
              </>
            )}
          </div>
          {/* Trailer and I info */}
          <div className={styles.trailerInfoContainer}>
            {/* > and Trailer */}
            <div className={styles.trailerContainer}>
              <ArrowRightIcon />
              <span>Trailer</span>
            </div>
            <InfoOutlinedIcon className={styles.infoIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
