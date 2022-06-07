import React, { useEffect, useState } from "react";
import { Header, WalletConnectingArea, NFTCreatingModal } from "components";
import { useWallet } from "@solana/wallet-adapter-react";

interface Props {}

export const NewNFT: React.FC<Props> = ({}) => {
  const wallet = useWallet();

  const [show, setShow] = useState(wallet.connected);

  useEffect(() => {
    setShow(wallet.connected);
  }, [wallet]);

  return (
    <>
      <Header onCreate={wallet.connected ? () => setShow(true) : null} />
      <WalletConnectingArea />
      <NFTCreatingModal
        display={show}
        onCloseButtonClicked={() => setShow(false)}
      />
    </>
  );
};
