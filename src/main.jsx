import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page from './Page.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Navbar />
    <Page />
  </StrictMode>,
)
