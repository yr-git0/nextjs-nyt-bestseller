import Head from "next/head";

export default function Title({ title }) {
  return (
    <Head>
      <title>{title} | The New York Times</title>
    </Head>
  );
}
