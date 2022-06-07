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
  AddAttribute,
  AttributeField,
  AttributeInput,
  AttributeRemover,
} from "./styles";

interface Props {
  onNext?: () => void;
}

const InformationStep: React.FC<Props> = ({ onNext }) => {
  const image = useCreateNFTStore((s) => s.image);
  const name = useCreateNFTStore((s) => s.name);
  const changeName = useCreateNFTStore((s) => s.changeName);
  const changeDescription = useCreateNFTStore((s) => s.changeDescription);
  const year = useCreateNFTStore((s) => s.year);

  const wallet = useWallet();

  const [nftName, setNFTName] = useState(name);
  const [description, setDescription] = useState(
    useCreateNFTStore((s) => s.description)
  );
  const [attributes, setAttributes] = useState([{ key: "", value: "" }]);

  const handleNext = () => {
    var ok = true;
    if (nftName.length > 32) {
      ok = false;
      document.querySelector("#v_name").className = "validation invalid";
    } else {
      document.querySelector("#v_name").className = "validation";
    }
    changeName(nftName);
    changeDescription(description);
    if (ok) {
      onNext();
    }
  };

  const handleRemove = (index) => {
    var filtered = attributes.filter(function (value, i, arr) {
      return i != index;
    });
    setAttributes(filtered);
  };

  const AttributeKeyEdit = (e, index) => {
    console.log(e.target.value);
    var temp = attributes;
    temp[index].key = e.target.value;
    setAttributes(temp);
  };

  const AttributeValueEdit = (e, index) => {
    var temp = attributes;
    temp[index].value = e.target.value;
    setAttributes(temp);
  };

  return (
    <Wrapper>
      <ModalTitle>Information</ModalTitle>
      <ModalContent>
        <LeftContent>
          <LeftDetails>
            <div>
              <p className="options">Creator</p>
              <input
                type="text"
                value={wallet.publicKey.toBase58()}
                placeholder="optional"
                className="globalInput"
              />
            </div>
            <div>
              <p className="options">Work Title</p>
              <input
                type="text"
                value={nftName}
                id="n_name"
                placeholder="Please input your Worktitle"
                className="globalInput"
                onChange={(e) => {
                  setNFTName(e.target.value);
                }}
              />
              <p className="validation" id="v_name">
                The resulting Buffer length from the NFT name can not be longer
                than 32. Please reduce the length of the name of your NFT.
              </p>
            </div>
            <div>
              <p className="options">Notes</p>
              <textarea
                id="n_description"
                value={description}
                placeholder="optional"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <p className="options">Year of Creation</p>
              <input
                id="n_external"
                type="text"
                value={year}
                placeholder="Input year of Creation"
                className="globalInput"
              />
              <p className="validation" id="v_year">
                Please enter a valid URL
              </p>
              <AddAttribute
                onClick={() => {
                  setAttributes((oldAttributes) => [
                    ...oldAttributes,
                    { key: "", value: "" },
                  ]);
                }}
              >
                Add Attribute
              </AddAttribute>
              <p className="validation" id="v_attribute">
                Please match your attributes exactly
              </p>
              {attributes.map((item, i) => {
                return (
                  <AttributeField>
                    <AttributeInput
                      value={item.key}
                      placeholder="key (optional)"
                      onChange={(e) => AttributeKeyEdit(e, i)}
                    />
                    <AttributeInput
                      value={item.value}
                      placeholder="value (optional)"
                      onChange={(e) => AttributeValueEdit(e, i)}
                    />
                    <AttributeRemover onClick={() => handleRemove(i)}>
                      <div className="close"></div>
                    </AttributeRemover>
                  </AttributeField>
                );
              })}
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

export default InformationStep;
