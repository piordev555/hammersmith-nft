import styled from "styled-components";
import { BaseColors } from "config/global.config";

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 30px 30px 40px 30px;
  background-color: ${BaseColors.baseBackgroundColor};
`;

const ModalTitle = styled.p`
  font-size: 50px;
  font-style: normal;
  text-align: center;
  font-weight: 900;
  color: ${BaseColors.activeFontColor};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FileBrowseInput = styled.div`
  width: 800px;
  height: 400px;
  border-radius: 30px;
  background-color: ${BaseColors.baseComponentBackgroundColor};
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.08),
    inset -5px -5px 10px #ffffff;
`;

const NextButton = styled.button`
  border: 0;
  outline: 0;
  width: 300px;
  border-radius: 25px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  padding: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  color: ${BaseColors.baseComponentBackgroundColor};
  background-color: ${BaseColors.activeFontColor};
  transition: all 0.2s ease-in-out;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    color: ${BaseColors.activeFontColor};
    background-color: ${BaseColors.baseComponentBackgroundColor};
    box-shadow: -2px -2px 5px #ffffff, 2px 2px 5px rgba(0, 0, 0, 0.08);
  }

  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.08),
      inset -1px -1px 2px #ffffff;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;
`;

const LeftDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;

  .options {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 8px;
    color: ${BaseColors.activeFontColor};
  }

  .number {
    width: 130px;
    margin-top: 10px;
    height: 50px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 25px;
    font-size: 20px;
    font-weight: 500;
    border: 0;
    color: ${BaseColors.baseFontColor};
    background: ${BaseColors.baseComponentBackgroundColor};
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.08),
      inset -5px -5px 10px #ffffff;
    transition: all 0.3s ease-in-out;

    &:active {
      border: 1px solid ${BaseColors.activeFontColor};
    }
  }

  .percentage {
    font-size: 26px;
    font-weight: 500;
    padding-top: 20px;
    color: ${BaseColors.activeFontColor};
  }

  .validation {
    font-weight: 500;
    color: ${BaseColors.baseErrorColor};
    display: none;
    margin-top: 2px;
    font-size: 20px;
    margin-bottom: 2px;

    transition: all 0.3s ease-in-out;

    &.invalid {
      display: block;
    }
  }

  .caption {
    font-size: 15px;
    font-weight: 700;
    color: ${BaseColors.activeFontColor};
  }

  .globalInput {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 25px;
    font-size: 20px;
    font-weight: 500;
    border: 0;
    color: ${BaseColors.baseFontColor};
    background: ${BaseColors.baseComponentBackgroundColor};
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.08),
      inset -5px -5px 10px #ffffff;
    transition: all 0.3s ease-in-out;

    &:active {
      border: 1px solid ${BaseColors.activeFontColor};
    }
  }

  textarea {
    width: 100%;
    min-height: 130px;
    padding-left: 25px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 7px;
    font-size: 20px;
    border: 0;
    color: ${BaseColors.inactiveFontColor};
    background: ${BaseColors.baseComponentBackgroundColor};
    font-weight: 500;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.08),
      inset -5px -5px 10px #ffffff;
    overflow-y: scroll;
    transition: all 0.3s ease-in-out;
  }
`;

const ImagePreview = styled.div`
  width: 20vw;
  height: 200px;
  margin-top: 28px;

  img {
    width: 100%;
    border: 0;
    outline: 0;
    border-radius: 20px;
  }
`;

const AddAttribute = styled.div`
  width: 100px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: ${BaseColors.activeFontColor};
`;

const AttributeField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 10px;
  gap: 10px;
`;

const AttributeInput = styled.input`
  width: 17vw;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
  border: 0;
  border-radius: 7px;
  color: ${BaseColors.baseFontColor};
  background: ${BaseColors.baseComponentBackgroundColor};
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.08),
    inset -5px -5px 10px #ffffff;
  transition: all 0.3s ease-in-out;
`;

const AttributeRemover = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08), -5px -5px 10px #ffffff;

  .close {
    top: 10px;
    left: 10px;
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

const PreviewCard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 400px;

  .name {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    color: ${BaseColors.activeFontColor};
  }

  .description,
  .key,
  .value {
    font-size: 22px;
    font-weight: 500;
    color: ${BaseColors.inactiveFontColor};
  }

  .value {
    font-size: 18px;
    font-weight: 500;
    color: ${BaseColors.activeFontColor};
  }

  .key {
    font-size: 18px;
    width: 150px;
  }

  .attribute {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  img {
    border: 0;
    outline: 0;
    border-radius: 20px;
  }
`;

export {
  Wrapper,
  ModalTitle,
  ModalContent,
  FileBrowseInput,
  NextButton,
  LeftContent,
  LeftDetails,
  ImagePreview,
  AddAttribute,
  AttributeField,
  AttributeInput,
  AttributeRemover,
  PreviewCard,
};
