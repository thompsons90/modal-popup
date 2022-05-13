import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackButton = styled(Link)`
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
`;

export const ConfirmTopTextContainer = styled.div`
  display: block;
  letter-spacing: 10px;
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
`;
