import React from "react";
import { CButton } from "components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wrapper, ConnectingArea, ConnectWalletTitle } from "./styles";

interface Props {}
const WalletConnectingArea: React.FC<Props> = ({}) => {
  return (
    <Wrapper>
      <ConnectingArea>
        <ConnectWalletTitle>
          Connect your Solana wallet to create NFTs
        </ConnectWalletTitle>
        <WalletMultiButton className="btn btn-blue rounded-full" />
      </ConnectingArea>
    </Wrapper>
  );
};

export default WalletConnectingArea;
