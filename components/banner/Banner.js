import styles from "./styles/Banner.module.css";
import header1 from "./assests/doctorStrange2.jpg";
import header2 from "./assests/doctorStrange4.jpg";
import header3 from "./assests/caption1.webp";
import header4 from "./assests/ds5.jpg";
import header5 from "./assests/iron1.jpg";
import header6 from "./assests/iron2.jpg";
import header7 from "./assests/ironCap1.jpg";
import header8 from "./assests/thor1.jpg";
import header9 from "./assests/thor2.jpg";

import Image from "next/image";

export default function Banner() {
  const imageArray = [
    header1,
    header2,
    header3,
    header4,
    header5,
    header6,
    header7,
    header8,
    header9,
  ];

  let index = Math.floor(Math.random() * imageArray.length);

  return (
    <div className={styles.bannerImagesContaienr}>
      <Image priority width={1080} height={608} src={imageArray[index]} />
    </div>
  );
}
