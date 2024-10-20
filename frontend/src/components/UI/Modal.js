import React from "react";
import { createPortal } from "react-dom";
import classes from "../../styles/Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("portal");

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
