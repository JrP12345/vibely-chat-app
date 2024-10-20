// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-zinc-900 w-11/12 md:w-1/3 rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &#10005; {/* X symbol for close */}
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
