import styled from "styled-components";
import { BaseColors } from "config/global.config";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Wrapper = styled.div`
  padding: 16px 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);
`;

const Logo = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 30px;
  color: ${BaseColors.activeFontColor};
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

const SearchBar = styled.div`
  margin: auto;
  width: 350px;
  height: 50px;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 53px;
    height: 53px;
    background: ${BaseColors.activeFontColor};
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.08),
      10px 10px 20px rgba(0, 0, 0, 0.08);
    &:hover {
      box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.08),
        10px 10px 20px rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }
    &::before {
      position: absolute;
      content: "";
      margin: auto;
      top: 19px;
      right: 0;
      bottom: 0;
      left: 18px;
      width: 10px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all 0.5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all 0.5s;
    }
  }
  input {
    font-family: "XBRoyaBold", "Inconsolata", monospace;
    position: absolute;
    margin: auto;
    text-align: left;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    background: ${BaseColors.activeFontColor};
    color: white;
    text-shadow: 0 0 10px ${BaseColors.activeFontColor};
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 ${BaseColors.activeFontColor},
      0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
      ~ .search {
        right: -300px;
        background: ${BaseColors.baseBackgroundColor};
        z-index: 6;
        &::before {
          top: 0;
          left: 0;
          width: 25px;
          background: ${BaseColors.inactiveFontColor};
        }
        &::after {
          top: 0;
          left: 0;
          width: 25px;
          height: 2px;
          border: none;
          background: ${BaseColors.inactiveFontColor};
          border-radius: 0%;
          transform: rotate(-45deg);
        }
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
`;

const ButtonGroup = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 24px;
`;

const WalletConnectButton = styled(WalletMultiButton)`
  button {
    border: 0;
    outline: 0;
    font-size: 22px;
    border-radius: 20px;
    padding: 20px;
    background-color: ${BaseColors.baseComponentBackgroundColor};
    margin-left: 5px;
    margin-right: 5px;
    color: ${BaseColors.baseFontColor};
    font-weight: bold;
    box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);

    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 700;

    &:hover {
      color: ${BaseColors.activeFontColor};
      background-color: ${BaseColors.baseComponentBackgroundColor};
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
  }
`;

export { Wrapper, Logo, SearchBar, ButtonGroup, WalletConnectButton };
