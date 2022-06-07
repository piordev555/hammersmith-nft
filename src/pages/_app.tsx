import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { ContextProvider } from "contexts/ContextProvider";
import { ContentContainer } from "components/ContentContainer";

require("@solana/wallet-adapter-react-ui/styles.css");
require("styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Solana Scaffold Lite</title>
      </Head>

      <ContextProvider>
        <div className="flex flex-col h-screen">
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
