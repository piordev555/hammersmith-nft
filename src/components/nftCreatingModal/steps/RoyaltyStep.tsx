import React, { useState } from "react";
import Image from "next/image";
import useCreateNFTStore from "stores";
import { useWallet } from "@solana/wallet-adapter-react";

import {
  Wrapper,
  ModalTitle,
  ModalContent,
  NextButton,
  LeftContent,
  LeftDetails,
  ImagePreview,
  AttributeField,
} from "./styles";

interface Props {
  onNext?: () => void;
}

const RoyaltyStep: React.FC<Props> = ({ onNext }) => {
  const image = useCreateNFTStore((s) => s.image);
  const wallet = useWallet();

  const [royalty, setRoyalty] = useState(10);
  const [agency, setAgency] = useState(wallet.publicKey.toBase58());
  const [artist, setArtist] = useState("");
  const [scout, setScout] = useState("");

  const isValidRoyalty = (value) => {
    if (value == "" || value < 0 || value > 100 || value == null) {
      return true;
    } else {
      return false;
    }
  };

  const checkInvalid = () => {
    var invalid = document.querySelector(".invalid");
    if (invalid == null) return true;
    return false;
  };

  const onRoyaltyChanged = (e) => {
    if (isValidRoyalty(e.target.value)) {
      document.querySelector("#v_name").className = "validation invalid";
    } else {
      document.querySelector("#v_name").className = "validation";
    }
    setRoyalty(e.target.value);
  };

  const handleNext = () => {
    if (checkInvalid()) {
      onNext();
    }
  };

  return (
    <Wrapper>
      <ModalTitle>Royalties & Creators</ModalTitle>
      <ModalContent>
        <LeftContent>
          <LeftDetails>
            <div>
              <p className="options">Royalties</p>
              {/* <p className="caption">
                What percentage of future sales will you receive
              </p> */}
              <AttributeField>
                <input
                  className="number"
                  value={royalty}
                  onChange={onRoyaltyChanged}
                  type="number"
                />
                <p className="percentage">%</p>
              </AttributeField>
              <p className="validation" id="v_name">
                Invalid input (it should be between 0 and 100)
              </p>
            </div>
            <div>
              <p className="options">Creators split</p>
              <p className="caption">agency: </p>
              <AttributeField>
                <input
                  className="globalInput"
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                  value={agency}
                  type="text"
                />
                <input className="number" type="number" defaultValue="85" />
                <p className="percentage">%</p>
              </AttributeField>
              <p className="caption">artist: (*)</p>
              <AttributeField>
                <input
                  className="globalInput"
                  placeholder="artist address"
                  type="text"
                  value={artist}
                  onChange={(e) => {
                    setArtist(e.target.value);
                  }}
                />
                <input className="number" type="number" defaultValue="5" />
                <p className="percentage">%</p>
              </AttributeField>
              <p className="caption">scout</p>
              <AttributeField>
                <input
                  className="globalInput"
                  placeholder="scout address (optional)"
                  type="text"
                  value={scout}
                  onChange={(e) => {
                    setScout(e.target.value);
                  }}
                />
                <input className="number" type="number" defaultValue="10" />
                <p className="percentage">%</p>
              </AttributeField>

              <p className="validation" id="v_name">
                Percentages must equal up to 100 and not be 0
              </p>
            </div>
            <div>
              <p className="options">Editions - One of One</p>
            </div>
          </LeftDetails>
          <ImagePreview>
            <Image
              src={image == "" ? "/assets/preview.png" : image}
              width="300"
              height="200"
            />
          </ImagePreview>
        </LeftContent>
        <NextButton onClick={handleNext}>Next</NextButton>
      </ModalContent>
    </Wrapper>
  );
};

export default RoyaltyStep;
