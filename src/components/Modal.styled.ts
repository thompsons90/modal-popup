import styled from "styled-components";

export const OuterModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-itmes: center;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 10px;
`;

export const InnerModal = styled.div`
  width: 95%;
  height: 82%;
  background-color: white;
  z-index: 10;
`;
