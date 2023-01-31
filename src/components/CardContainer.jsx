import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CardContainer = ({ notionData }) => {
  const results = notionData.results;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    console.log('close');
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 cursor-pointer'>
      {results.map((results, index) => {
        return (
          <div
            key={index}
            className='flex flex-col p-4 m-4 rounded-lg bg-slate-200 shadow-xl transition-all duration-300 hover:shadow-none hover:scale-95 hover:opacity-100 opacity-80 cursor-pointer'
            onClick={openModal}
          >
            {results.properties.Image.files.map((imageResult, index) => {
              return (
                <div key={index}>
                  <img
                    src={imageResult.external.url}
                    className='cursor-pointer'
                  />
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel='Example Modal'
                  >
                    <img src={imageResult.external.url} />
                  </Modal>
                </div>
              );
            })}
            {results.properties.Name.title.map((titleResult, index) => {
              return (
                <h1 className='text-center font-bold' key={index}>
                  {titleResult.plain_text}
                </h1>
              );
            })}
            {results.properties.Content.rich_text.map(
              (contentResult, index) => {
                return (
                  <p className='text-center' key={index}>
                    {contentResult.plain_text}
                  </p>
                );
              }
            )}
            {results.properties.Content.rich_text.map(
              (contentResult, index) => {
                return (
                  <p className='text-center' key={index}>
                    {contentResult.plain_text}
                  </p>
                );
              }
            )}
            <button
              className='bg-white p-2 mt-5 rounded text-center hover:bg-black hover:text-white'
              key={index}
            >
              {results.properties.Btn_txt.rich_text.map(
                (btnTxtResult, index) => {
                  return (
                    <a key={index} href={results.properties.Link.url}>
                      {btnTxtResult.plain_text}
                    </a>
                  );
                }
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
