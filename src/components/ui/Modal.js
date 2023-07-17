import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const portalElement = document.getElementById("overlays");
  if (!portalElement) {
    return <></>;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop show={modal.show} onClick={modal.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          className={classes.Modal}
          style={{
            transform: modal.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: modal.show ? "1" : 0,
          }}
        >
          {modal.contenido}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;