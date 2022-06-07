import React from "react";

import { CButton } from "components";
import { Wrapper, Logo, SearchBar, ButtonGroup } from "./styles";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

interface Props {
  onCreate?: () => void;
}

const Header: React.FC<Props> = ({ onCreate }) => {
  return (
    <Wrapper>
      <Logo>HammerSmith</Logo>
      <SearchBar>
        <input type="text" placeholder="Search HammerSmith..." />
        <div className="search"></div>
      </SearchBar>
      <ButtonGroup>
        <CButton onClick={onCreate}>Create</CButton>
        <WalletMultiButton className="btn btn-blue rounded-full" />
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
