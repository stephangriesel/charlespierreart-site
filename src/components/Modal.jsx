import React from 'react';

const Modal = ({ shown, close, selectedImageUrl }) => {
    console.log('shown:', shown);
    if (!shown) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => close()}>
            <div className="w-1/3 min-h-[120px] bg-white rounded-lg p-6 max-w-xl mx-auto">
                <img src={selectedImageUrl} alt="" className="mb-4" onClick={() => close()} />
            </div>
        </div>
    );
};


export default Modal;
