import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Transition from "../utils/Transition";

function Modal({ children, id, ariaLabel, show, handleClose }) {
  const modalContent = useRef(null);

  // close the modal on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!show || modalContent.current.contains(target)) return;
  //     handleClose();
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      handleClose();
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-100"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-100 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-100 scale-95"
      >
        <div
          className="bg-white relative shadow-2xl overflow-auto max-w-3xl w-full p-8 pt-12"
          ref={modalContent}
        >
          <div className="absolute top-3 right-4 hover:cursor-pointer">
            <span className="m-4" onClick={() => handleClose()}>&#10006;</span>
          </div>
          {children}
        </div>
      </Transition>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
