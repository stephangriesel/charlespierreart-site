import React from 'react'

const Modal = ({ children, shown, close }) => {
    return shown ? (
        <div className='fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-10 bg-black/40' onClick={() => close()}>
            <div className=' w-2/3 min-h-[200px] bg-white p-6 flex justify-center' onClick={() => close()}>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal