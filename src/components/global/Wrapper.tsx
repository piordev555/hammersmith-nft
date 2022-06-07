import React from "react";
import styled from "styled-components";
import { BaseColors } from "config/global.config";

interface Props {
  children?: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <BaseColoredDiv>{children}</BaseColoredDiv>;
};

const BaseColoredDiv = styled.div`
  background-color: ${BaseColors.baseBackgroundColor};
  margin: 0;
  padding: 0;
`;

export default Wrapper;
