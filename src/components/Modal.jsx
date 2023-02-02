import React from 'react';
import CloseIcon from '../icons/Close';

const Modal = ({ children, shown, close }) => {
  return shown ? (
    <div className='bg-black modal-backdrop' onClick={() => close()}>
      <div className='flex justify-center modal-content' onClick={e => {
        e.stopPropagation();
      }}>
        Modal
        <button onClick={close}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
