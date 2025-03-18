// src/components/Modal.jsx
import React from 'react';

const Modal = ({ showModal, setShowModal }) => (
  showModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-8">
        <h3 className="mb-4 text-xl font-bold">Thank You!</h3>
        <p>Your message has been sent successfully.</p>
        <button
          onClick={() => setShowModal(false)}
          className="!rounded-button mt-6 cursor-pointer bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 whitespace-nowrap"
        >
          Close
        </button>
      </div>
    </div>
  )
);

export default Modal;