import Head from "next/head";
import { Home } from "pages";

export default function Index() {
  return (
    <>
      <Head>
        <title>Главная | YANKI</title>
      </Head>
      <Home />
    </>
  );
}
