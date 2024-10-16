import '../node_modules/bootstrap/dist/js/bootstrap.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes2 from './components/AppRoutes2.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes2/>
    </BrowserRouter>
  </React.StrictMode>,
)
