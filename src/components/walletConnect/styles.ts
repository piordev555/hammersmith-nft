import styled from "styled-components";
import { BaseColors } from "config/global.config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const ConnectingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 400px;
  height: 300px;
  border-radius: 20px;
  padding: 40px 20px;

  background-color: ${BaseColors.baseComponentBackgroundColor};
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);
`;

const ConnectWalletTitle = styled.p`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: ${BaseColors.activeFontColor};
`;

export { Wrapper, ConnectingArea, ConnectWalletTitle };
