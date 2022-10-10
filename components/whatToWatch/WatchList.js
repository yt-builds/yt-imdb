import IndividualList from "./IndividualList";
import styles from "./styles/WatchList.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getMoviesFromWatchList } from "../../service/watchlistService";

export default function WatchList() {
  const { data: session } = useSession();

  const [addedMoviesResult, setAddedMovieResult] = useState();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 558 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet2: {
      breakpoint: { max: 768, min: 558 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 558, min: 320 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const moviesArray = [
    {
      id: 0,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      rating: "6.8",
      filmName: "Thor Love and Thunder",
    },
    {
      id: 1,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      rating: "8.4",
      filmName: "Avengers Endgame",
    },
    {
      id: 2,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
      rating: "8.4",
      filmName: "Avengers Infinity War",
    },
    {
      id: 3,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      rating: "9.0",
      filmName: "Batman: The Dark Knight",
    },
    {
      id: 4,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg",
      rating: "7.6",
      filmName: "Despicable Me",
    },
    {
      id: 5,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
      rating: "7.0",
      filmName: "Doctor Strange: Multiverse of Madness",
    },
    {
      id: 6,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg",
      rating: "6.4",
      filmName: "Minions",
    },
    {
      id: 7,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg",
      rating: "7.4",
      filmName: "Moon Knight",
    },
    {
      id: 8,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      rating: "8.7",
      filmName: "Stranger Things 4",
    },
    {
      id: 9,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
      rating: "7.9",
      filmName: "Thor Ragnarok",
    },
    {
      id: 10,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
      rating: "7.9",
      filmName: "Thor: The Dark World",
    },
    {
      id: 11,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      rating: "8.6",
      filmName: "TopGun Maverick",
    },
    {
      id: 12,
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
      rating: "7.3",
      filmName: "Black Panther",
    },
  ];

  useEffect(() => {
    getMoviesFromWatchList(session?.user?.email, setAddedMovieResult);
  }, [session?.user]);

  return (
    <div className={styles.container}>
      {/* Crauseol Here */}
      <Carousel
        className={styles.carouselContainer}
        responsive={responsive}
        ssr={true}
        customTransition="all 1.2s"
      >
        {moviesArray.map((movie, i) => (
          <IndividualList
            key={i}
            id={movie?.id}
            posterImage={movie?.posterImage}
            rating={movie?.rating}
            filmName={movie?.filmName}
            watchListMovie={addedMoviesResult?.filter(function value(v) {
              return v.addedMovieId === movie.id;
            })}
          />
        ))}
      </Carousel>
    </div>
  );
}
