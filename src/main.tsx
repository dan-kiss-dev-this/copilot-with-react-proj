import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './Home';
import Register from './Register';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </StrictMode>,
)
