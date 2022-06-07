import styled from "styled-components";
import { BaseColors } from "config/global.config";

const Wrapper = styled.div`
  .uploader {
    display: block;
    clear: both;
    margin: 40px auto;
    width: 650px;

    label {
      float: left;
      clear: both;
      width: 100%;
      height: 400px;
      padding: 2rem 1.5rem;
      text-align: center;
      border-radius: 7px;
      border: 3px solid #eee;
      transition: all 0.2s ease;
      user-select: none;
      background-color: ${BaseColors.baseComponentBackgroundColor};
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.08),
        inset -5px -5px 10px #ffffff;

      &:hover {
        box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.08),
          inset -10px -10px 20px #ffffff;
        #file-image {
          opacity: 0.8;
        }
      }
      &.hover {
        border: 3px solid $theme;
        box-shadow: inset 0 0 0 6px #eee;

        #start {
          i.fa {
            transform: scale(0.8);
            opacity: 0.3;
          }
        }
      }
    }

    #start {
      float: left;
      clear: both;
      width: 100%;
      &.hidden {
        display: none;
      }
      i.fa {
        font-size: 50px;
        margin-bottom: 1rem;
        transition: all 0.2s ease-in-out;
      }
    }
    #response {
      float: left;
      clear: both;
      width: 100%;
      &.hidden {
        display: none;
      }
      #messages {
        margin-bottom: 0.5rem;
      }
    }

    #file-image {
      border-radius: 20px;
      outline: 1px;
      margin: 0 auto 0.5rem auto;
      &.hidden {
        display: none;
      }
    }

    #notimage {
      display: block;
      float: left;
      clear: both;
      width: 100%;
      &.hidden {
        display: none;
      }
    }

    input[type="file"] {
      display: none;
    }

    div {
      font-size: 18px;
      font-weight: 500;
      margin: 0.5rem 0 0.7rem 0;
      color: ${BaseColors.baseFontColor};
    }
    .btn {
      border: none;
      height: 36px;
      outline: none;
      padding: 0 1rem;
      font-size: 20px;
      line-height: 36px;
      text-align: center;
      font-family: inherit;
      border-radius: 0.4rem;
      text-transform: initial;
      margin: 0.5rem 0.5rem 1rem 0.5rem;
      transition: all 0.2s ease-in-out;
      background-color: ${BaseColors.baseComponentBackgroundColor};
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08), -5px -5px 10px #ffffff;
      color: ${BaseColors.activeFontColor};
      cursor: pointer;

      &:hover {
        color: ${BaseColors.baseFontColor};
      }
      &:active {
        box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.08),
          inset -2px -2px 10px #ffffff;
      }
    }
  }
`;

export { Wrapper };
