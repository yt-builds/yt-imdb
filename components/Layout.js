import Head from "next/head";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>IMBD YT</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}
