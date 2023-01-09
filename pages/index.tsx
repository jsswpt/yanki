import Head from "next/head";
import { Home } from "pages";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | YANKI</title>
      </Head>
      <Home />
    </>
  );
}
