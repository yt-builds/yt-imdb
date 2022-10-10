import db from "../firebase";

export const getMoviesFromWatchList = (registerDocID, setWatchListMovies) => {
  db.collection("register")
    .doc(registerDocID)
    .collection("watchlist")
    .onSnapshot((snap) => {
      const MoviesArr = [];
      snap.forEach((doc) => MoviesArr.push(doc.data()));
      console.log(MoviesArr);
      setWatchListMovies(MoviesArr);
    });
};


export const delteMovieFromWatchList = (path, docID) => {
  db.collection(path).doc(docID).delete();
}

export const addMovieToWatchList = (path, docId, object) => {
  db.collection(path).doc(docId).set(object);
};
