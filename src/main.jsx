import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  <StrictMode>
    <App />
  </StrictMode>
</div>
)
