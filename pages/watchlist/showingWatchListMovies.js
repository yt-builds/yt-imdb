import styles from "./style/showingWatchListMovies.module.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getMoviesFromWatchList } from "../../service/watchlistService";
import IndividualList from "../../components/whatToWatch/IndividualList";

export default function ShowingWatchListMovies() {
  const { data: session } = useSession();
  const [addedMoviesResult, setAddedMovieResult] = useState();

  useEffect(() => {
    getMoviesFromWatchList(session?.user?.email, setAddedMovieResult);
  }, [session?.user]);

  //   console.log(addedMoviesResult);

  const renderElement = (
    <>
      {addedMoviesResult?.map((movie, i) => (
        <IndividualList
          key={i}
          id={movie.addedMovieId}
          posterImage={movie.posterImage}
          rating={movie.rating}
          filmName={movie.filmName}
          watchListMovie={addedMoviesResult?.filter(function value(v) {
            return v.addedMovieId == movie.addedMovieId;
          })}
        />
      ))}
    </>
  );

  return (
    <div className={styles.container}>
      {!addedMoviesResult?.length > 0 ? (
        <h1>No Movies added yet!😢</h1>
      ) : (
        renderElement
      )}
    </div>
  );
}
