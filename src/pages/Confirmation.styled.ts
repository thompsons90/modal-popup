import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../utils/Breakpoints";

export const XButton = styled.button`
  float: right;
  border: none;
  color: #e9e9e9;
  background-color: white;
  &:hover {
    color: #464646;
    cursor: pointer;
  }
  text-decoration: none;
`;

export const ConfirmationContainer = styled.div`
  h1,
  p {
    color: #464646;
    font-family: "Prata", "serif";
  }
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 14px;
  }
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  @media ${device.desktop} {
    padding-top: 55px;
  }
`;

export const ConfirmTopTextContainer = styled.div`
  letter-spacing: 10px;
  h1 {
    display: flex;
    flex-direction: column;
  }
  padding-top: 30px;
  @media ${device.desktop} {
    h1 {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 16px;
      font-size: 65px;
    }
    width: 80%;
    margin-right: 20px;
  }
`;

export const DesignerImg = styled.img`
  width: 60%;
  @media ${device.desktop} {
    width: 150px;
  }
`;

export const ConfirmBotTextContainer = styled.div`
  font-size: 14px;
  line-height: 2;
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${device.desktop} {
    margin-right: 20px;
  }
`;

export const ShopButton = styled(Link)`
  padding: 15px;
  font-size: 15px;
  color: #fd8c94;
  background-color: white;
  border: 2px solid #fd8c94;
  width: 100%;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
  @media ${device.desktop} {
    width: 75px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;
