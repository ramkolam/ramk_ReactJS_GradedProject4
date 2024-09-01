import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import "../modalStyles.css";



const Modal = ({ children, isOpen, handleClose }) => {

    useEffect(() => {
        const closeOnEscapeKey = (e) => e.key === "Escape" ? handleClose(e) : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        e.stopPropagation();
    };

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <div className="modal" onClick={handleOverlayClick}>
                <button onClick={handleClose} className="close-btn">
                    Close
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </ReactPortal>
    );
}
export default Modal;