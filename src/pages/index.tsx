import type { NextPage } from "next";
import Head from "next/head";

import { NewNFT } from "views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>HammerSmith</title>
        <meta name="description" content="HammerSmith" />
      </Head>
      <NewNFT />
    </div>
  );
};

export default Home;
