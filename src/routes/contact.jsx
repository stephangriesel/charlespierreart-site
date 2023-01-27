import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Wrapper from '../components/Wrapper';

const Contact = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <ContactUs />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Contact;
