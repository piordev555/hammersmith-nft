import styled from "styled-components";
import { BaseColors } from "config/global.config";

const ButtonContainer = styled.button`
  border: 0;
  outline: 0;
  font-size: 20px;
  border-radius: 25px;
  padding: 20px 30px 20px 30px;
  background-color: ${BaseColors.baseComponentBackgroundColor};
  margin-left: 15px;
  margin-right: 15px;
  color: ${BaseColors.baseFontColor};
  font-weight: bold;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);

  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: ${BaseColors.activeFontColor};
    box-shadow: -2px -2px 5px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.08);
  }

  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.08),
      inset -1px -1px 2px #ffffff;
  }

  .icon {
    margin-right: 16px/2;
  }

  &.unit {
    border-radius: 16px/2;
    line-height: 0;
    width: 16px * 3;
    height: 16px * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 16px/2;
    font-size: 16px * 1.2;

    .icon {
      margin-right: 0;
    }
  }
`;

export { ButtonContainer };
