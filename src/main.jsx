import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './AppTemp'
// import AppOriginal from './AppOriginal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <AppOriginal /> */}
  </React.StrictMode>,
)
