import styled from "styled-components";
import { BaseColors } from "config/global.config";
import { CButton } from "components";

interface WrapperProps {
  show: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  top: 0;
  left: 0;
  z-index: 6;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  overflow-x: scroll;
  transition: all 0.3s ease-in-out;
  background-color: ${BaseColors.baseBackgroundColor};
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 50px 20px;
  transition: all 0.4s ease-in-out;
`;

const StepContent = styled.div`
  text-align: center;
`;

const CloseButton = styled.div`
  cursor: pointer;
  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    &::before {
      position: absolute;
      content: "";
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      left: 0px;
      width: 25px;
      height: 2px;
      transform: rotate(45deg);
      background: ${BaseColors.inactiveFontColor};
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      width: 25px;
      height: 2px;
      border: none;
      transform: rotate(-45deg);
      background: ${BaseColors.inactiveFontColor};
    }
  }
`;

const BackButton = styled(CButton)`
  position: fixed;
  top: 30px;
  right: 30px;
`;

export { Wrapper, ModalContent, StepContent, CloseButton, BackButton };
