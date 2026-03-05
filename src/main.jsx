import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// ✅ Initialize your Google Analytics
// ReactGA.initialize("G-EQ0NCPWEZ0"); // <-- তোমার GA4 ID
// ReactGA.send("pageview"); // <-- Home page visitor count

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
