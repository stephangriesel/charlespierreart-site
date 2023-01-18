import React, { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';

const App = () => {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    const fetchNotionData = async () => {
      const data = await fetch('/api/fetchNotion');
      const allNotionData = await data.json();
      console.log("notion data in app", allNotionData);
      setNotionData(allNotionData);
    }
    const timer = setTimeout(() => {
      fetchNotionData();
    }, 1);

    return () => clearTimeout(timer);
  },[])

  if (!notionData){
    return <div className='App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen'></div>
  }


  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <CardContainer notionData={notionData}/>
    </div>
  )
}

export default App
