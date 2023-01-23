import React from 'react'
import ReactDOM from 'react-dom/client'
import AppTemp from './AppTemp'
// import AppLive from './AppOriginal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTemp />
    {/* <AppLive /> */}
  </React.StrictMode>,
)
