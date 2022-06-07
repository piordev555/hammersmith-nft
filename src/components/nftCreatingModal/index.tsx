import React, { useState, useEffect } from "react";
import { Wrapper, ModalContent, CloseButton, BackButton } from "./styles";
import {
  BrowseFilesStep,
  InformationStep,
  RoyaltyStep,
  SummaryStep,
} from "./steps";

/**
 * @workflow
 * -first browseFiles
 * -second making nft information
 * -third Royalties & Creators
 * -final summary
 */

interface Props {
  display: boolean;
  onCloseButtonClicked?: () => void;
}

const NFTCreatingModal: React.FC<Props> = ({
  display,
  onCloseButtonClicked,
}) => {
  const [step, setstep] = useState(1);

  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  return (
    <Wrapper show={display}>
      <ModalContent style={{ marginLeft: "30px" }}>
        <CloseButton onClick={onCloseButtonClicked}>
          <div className="close"></div>
        </CloseButton>
        {step > 1 && (
          <div style={{ position: "fixed", top: "26px", left: "30px" }}>
            <BackButton onClick={prevStep}>Back</BackButton>
          </div>
        )}
        {step == 1 && <BrowseFilesStep onNext={nextStep} />}
        {step == 2 && <InformationStep onNext={nextStep} />}
        {step == 3 && <RoyaltyStep onNext={nextStep} />}
        {step == 4 && <SummaryStep />}
      </ModalContent>
    </Wrapper>
  );
};

export default NFTCreatingModal;
