import { useSession } from "next-auth/react";
import SignINIMDB from "../../components/signInIMDB/signINIMDB";
import ShowingWatchListMovies from "./showingWatchListMovies";

export default function watchlist() {
  const { data: session } = useSession();

  return session ? <ShowingWatchListMovies /> : <SignINIMDB />;
}
