import TrendingVideo from "../../UI/trendingVideo/TrendingVideo";
import styles from "./styles/Trending.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JohnWick from "./assests/JohnWick.jpg";
import JohnWickPoster from "./assests/JohnWickPoster.jpg";
import black from "./assests/black.jpg";
import blackWishList from "./assests/blackWishList.jpg";
import Shazam from "./assests/Shazam.jpg";
import ShazamPoster from "./assests/ShazamPoster.jpg";
import WalkingDead from "./assests/WalkingDead.jpg";
import WalkingDeadPoster from "./assests/WalkingDeadPoster.jpg";
import LOTR from "./assests/LOTR.jpg";
import LORTPoster from "./assests/LORTPoster.jpg";
import UpNext from "../../UI/UpNextElement/UpNext";

export default function Trending() {
  return (
    <div className={styles.trendingContainer}>
      {/* Left Side */}
      <div className={styles.carouselContainer}>
        {/* Crasouel */}
        <Carousel
          autoPlay={false}
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          transitionTime={750}
        >
          <div className={styles.crDiv}>
            {/* Element */}
            <TrendingVideo
              image={JohnWick}
              poster={JohnWickPoster}
              description={"'John Wick 4' Sneak Peak"}
              subText={"Watch the Comic-Con Trailer"}
              time={"1:06"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={black}
              poster={blackWishList}
              description={"'The Outlaws' Return on Aug 5"}
              subText={"Watch the Season 2 Trailer"}
              time={"2:04"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={Shazam}
              poster={ShazamPoster}
              description={"The 'Shazam! Fury of the Gods' Trailer is Here"}
              subText={"The 'Shazam! Fury of the Gods' Trailer is Here"}
              time={"2:25"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={WalkingDead}
              poster={WalkingDeadPoster}
              description={"'The Walking Dead' Comes to an End"}
              subText={"Watch the Final Season 11 Trailer"}
              time={"3:09"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={LOTR}
              poster={LORTPoster}
              description={"The Lord of the Rings: The Rings of Power"}
              subText={"Watch the Official San Diego Comic-Con Trailer"}
              time={"3:02"}
            />
          </div>
        </Carousel>
      </div>

      {/* Right Side - Up Next */}
      <div className={styles.upNextContainer}>
        <h2>Up Next</h2>
        <div className={styles.nextMoviesContainer}>
          {/* UpNext Element */}
          <UpNext
            image={JohnWickPoster}
            time={"1:06"}
            description={"'John Wick 4' Sneak Peak"}
            subText={"Watch the Comic-Con Trailer"}
          />
          <UpNext
            image={blackWishList}
            time={"2:04"}
            description={"'The Outlaws' Return on Aug 5"}
            subText={"Watch the Season 2 Trailer"}
          />
          <UpNext
            image={ShazamPoster}
            time={"1:06"}
            description={"The 'Shazam! Fury of the Gods' Trailer is Here"}
            subText={"The 'Shazam! Fury of the Gods' Trailer is Here"}
          />
          <UpNext
            image={WalkingDeadPoster}
            time={"1:06"}
            description={"'The Walking Dead' Comes to an End"}
            subText={"Watch the Final Season 11 Trailer"}
          />
          <UpNext
            image={LORTPoster}
            time={"1:06"}
            description={"The Lord of the Rings: The Rings of Power"}
            subText={"Watch the Official San Diego Comic-Con Trailer"}
          />
        </div>
        <h3>Browse Trailers</h3>
      </div>
    </div>
  );
}
