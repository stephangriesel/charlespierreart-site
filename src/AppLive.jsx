import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import Wrapper from './components/Wrapper';
import CardContainer from './components/CardContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Loading from './icons/Loading';

Modal.setAppElement('#root');

const App = () => {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    const fetchNotionData = async () => {
      const data = await fetch('/api/fetchNotion');
      const allNotionData = await data.json();
      console.log('notion data in app', allNotionData);
      setNotionData(allNotionData);
    };
    const timer = setTimeout(() => {
      fetchNotionData();
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  if (!notionData) {
    return (
      <div className='App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center flex-col'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full md:h-screen'>
      <Wrapper>
        <NavBar />
        <CardContainer notionData={notionData} />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default App;
