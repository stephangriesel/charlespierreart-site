import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center flex-col'>
      <form
        className='flex flex-col'
        action='https://form.taxi/s/kjc5kgze'
        method='POST'
      >
        <label className='ml-2' htmlFor='name'>
          Name:
        </label>
        <input className='p-5 m-2 text-xl' type='text' name='Name' />
        <label className='ml-2' htmlFor='name'>
          Email:
        </label>
        <input className='p-5 m-2 text-xl' type='email' name='Email' />
        <label className='ml-2' htmlFor='name'>
          Message:
        </label>
        <textarea
          rows='6'
          className='p-5 m-2 text-xl'
          name='Message'
        ></textarea>
        <input
          className='p-5 m-2 bg-purple-900 hover:bg-purple-400 text-2xl transition-all text-white hover:text-black ease-in-out duration-300 cursor-pointer'
          type='submit'
          value='Send'
        />
      </form>
    </div>
  );
};

export default ContactUs;
