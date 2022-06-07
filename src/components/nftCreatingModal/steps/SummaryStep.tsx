import React from "react";
import Image from "next/image";
import useCreateNFTStore from "stores";

import {
  Wrapper,
  ModalTitle,
  ModalContent,
  NextButton,
  PreviewCard,
} from "./styles";

interface Props {}

const SummaryStep: React.FC<Props> = ({}) => {
  const image = useCreateNFTStore((s) => s.image);
  const name = useCreateNFTStore((s) => s.name);
  const description = useCreateNFTStore((s) => s.description);
  const year = useCreateNFTStore((s) => s.year);
  // const attributes = useCreateNFTStore((s) => s.attributes);

  return (
    <Wrapper>
      <ModalTitle>Do these look right?</ModalTitle>
      <ModalContent>
        <NextButton>Looks good</NextButton>
        <PreviewCard>
          <Image src={image} width="400" height="300" />
          <p className="name">{name}</p>
          <p className="description">{description}</p>
          <div className="attribute">
            <p className="key">Year of creation</p>
            <p className="value">{year}</p>
          </div>
        </PreviewCard>
      </ModalContent>
    </Wrapper>
  );
};

export default SummaryStep;
