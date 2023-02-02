import React from 'react'

const Modal = ({ children, shown, close }) => {
    return shown ? (
        <div className='bg-black modal-backdrop' onClick={() => close()}>
            <div className='flex justify-center modal-content' onClick={() => close()}>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal