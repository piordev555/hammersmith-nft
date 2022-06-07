import React, { useState, useEffect } from "react";
import { DNDFileBrowse } from "components";
import { Wrapper, ModalTitle, ModalContent, NextButton } from "./styles";
import useCreateNFTStore from "stores";

interface Props {
  onNext?: () => void;
}

const BrowseFilesStep: React.FC<Props> = ({ onNext }) => {
  const image = useCreateNFTStore((s) => s.image);
  return (
    <Wrapper>
      <ModalTitle>
        Add images or videos here <br />
        to create NFTs
      </ModalTitle>
      <ModalContent>
        <DNDFileBrowse />
        {image != "" && <NextButton onClick={onNext}>Looks Good</NextButton>}
      </ModalContent>
    </Wrapper>
  );
};

export default BrowseFilesStep;
