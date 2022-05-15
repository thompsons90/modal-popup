import styled from "styled-components";
import { device } from "../utils/Breakpoints";

export const OpenModal = styled.button`
  z-index: -1;
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
export const StylishLine = styled.img`
  height: 100%;
  transform: translateX(50px);
  @media ${device.mobile} {
    display: none;
  }
`;

export const PopupContainer = styled.div`
  width: 90%;
  height: 520px;
  margin: auto;
  margin-bot: 0;
  padding-top: 10px;
  h1,
  h3,
  h4,
  p {
    color: #464646;
    font-family: "Prata", "serif";
  }
  h1 {
    font-size: 45px;
  }
  h2 {
    color: #fd8c94;
    font-family: "Prata", "serif";
    font-size: 65px;
  }
  h3 {
    font-size: 144px;
  }
  h4 {
    font-size: 70px;
  }
  p {
    font-size: 23px;
  }
  @media ${device.desktop} {
    // display: flex;
    vertical-align: middle;
    height: 100%;
    width: 95%;
  }
`;
export const XButton = styled.button`
  float: right;
  border: none;
  color: #e9e9e9;
  background-color: white;
  &:hover {
    color: #464646;
    cursor: pointer;
  }
  font-size: 25px;
`;

export const InsideContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
    margin: auto;
    width: 70%;
    transform: translateY(90px);
  }
`;

export const PopupTopContainer = styled.div`
  text-align: center;
  width: 85%;
  margin: auto;
  padding-top: 40px;
  @media ${device.desktop} {
    h1 {
      font-size: 65px;
    }
    h3 {
      font-size: 167px;
    }
    h4 {
      font-size: 82px;
    }
    p {
      font-size: 28px;
    }
    width: 200px;
    height: 350px;
    text-align: left;
    padding: 0;
  } ;
`;

export const PopupTopTextContainer = styled.div`
  letter-spacing: 10px;
  display: inline;

  content-fit: @media ${device.desktop} {
    height: 500px;
    border: 2px solid green;
    align-items: center;
  }
`;

export const PopupMidContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 4px;
  }
  hr {
    width: 120px;
    height: 2px;
    background-color: #e9e9e9;
    border: none;
  }
  @media ${device.desktop} {
    width: 55px;
    display: inline-block;
    height: 300px;
    hr {
      height: 100px;
      width: 2px;
      transform: translateX(20px);
    }
  }
`;

export const PopupBotTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h4,
  p {
    line-height: 0.85;
  }
  height: 150px;
  @media ${device.desktop} {
    margin: 0;
  }
`;

export const PopupBotContainer = styled.div`
  @media ${device.desktop} {
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 300px;
    padding-top: 50px;
    margin: 0;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const EmailAddress = styled.input`
  &:placeholder {
    color: black;
  }
  font-family: "PT Sans", "sans serif";
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  outline: none;
  border-top: none;
  border-bottom: 3px solid #464646;
  border-left: none;
  border-right: none;
  width: 100%;
  padding-bottom: 10px;
`;
export const SignUpButton = styled.input`
  padding: 10px;
  margin-top: 20px;
  font-size: 15px;
  color: #fd8c94;
  background-color: white;
  border: 3px solid #fd8c94;
  border-radius: 0px;
  width: 100%;
  vertical-align: middle;
  &:hover {
    color: #464646;
    cursor: pointer;
  }
  @media ${device.desktop} {
    border-top: none;
    border-left: none;
    border-right: none;
    width: 30%;
    transform: translateY(-14px);
  }
`;
