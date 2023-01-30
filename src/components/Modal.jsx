import React from 'react';
import CloseIcon from '../icons/Close';

const Modal = ({ setIsOpen }) => {
  return (
    <div className='bg-black' onClick={() => setIsOpen(false)}>
      <div className='flex justify-center'>
        Modal
        <button onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;
