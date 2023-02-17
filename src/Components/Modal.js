import {useEffect, useRef} from 'react';
import './modalStyles.css'
import ReactPortal from "./ReactPortal";
import { CSSTransition } from "react-transition-group";

const Modal = ({ children, isOpen, handleClose }) => {

    const nodeRef = useRef(null);

    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    const handleStopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <ReactPortal wrapperId="react-portal-modal">
            <CSSTransition
                in={isOpen}
                timeout={{ entry: 0, exit: 200 }}
                unmountOnExit
                classNames="modal"
                nodeRef={nodeRef}
            >
                <div className="modal" ref={nodeRef} onClick={handleClose}>
                    <button onClick={handleClose} className="button" style={{ top: "20%" }}>
                        Close
                    </button>
                    <div className="modal-content" onClick={handleStopPropagation}>
                        {children}
                    </div>
                </div>
            </CSSTransition>
        </ReactPortal>
    );
};

export default Modal;
