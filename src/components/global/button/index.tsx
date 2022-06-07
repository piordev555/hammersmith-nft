import React from "react";
import { ButtonContainer } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const CButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <ButtonContainer className="unit" onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default CButton;
