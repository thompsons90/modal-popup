import styled from "styled-components";

export const OpenModal = styled.button`
  z-index: -1;
`;

export const PopupContainer = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 25px;
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
`;

export const PopupTopContainer = styled.div`
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
  text-align: center;
  width: 85%;
  margin: auto;
`;

export const PopupTopTextContainer = styled.div`
  letter-spacing: 10px;
  display: inline-block;
`;

export const PopupMidContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 4px;
    mar
  }

  hr {
    flex-grow: 1;
    height: 2px;
    background-color: #e9e9e9;
    border: none;
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
`;

export const PopupBotContainer = styled.div`
  font-family: "PT Sans", "sans serif";
  display: flex;
  justify-content: center;
  align-text: center;
  align-items: center;
  width: 90%;
  margin: auto;
`;

export const FormContainer = styled.form`
  width: 100%;
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
  border-bottom: 3px solid black;
  border-left: none;
  border-right: none;
  width: 100%;
  padding-bottom: 10px;
`;
export const SignUpButton = styled.input`
  padding: 15px;
  font-size: 15px;
  color: #fd8c94;
  background-color: white;
  border: 2px solid #fd8c94;
  width: 100%;
  vertical-align: middle;
`;
