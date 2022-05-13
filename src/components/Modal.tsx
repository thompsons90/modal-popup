import * as React from "react";
import { InnerModal, OuterModal } from "./Modal.styled";

type ModalComponent = (props: {
  children: React.ReactElement;
  isOpen: Boolean;
}) => JSX.Element | null;
console.log("modalize");

export const Modal: ModalComponent = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <OuterModal>
      <InnerModal>{children}</InnerModal>
    </OuterModal>
  );
};
