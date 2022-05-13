import * as React from "react";
import "./Modal.scss";

type ModalComponent = (props: {
  children: React.ReactElement;
  isOpen: Boolean;
}) => JSX.Element | null;
console.log("modalize");

export const Modal: ModalComponent = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="inner-modal">{children}</div>
    </div>
  );
};
