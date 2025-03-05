import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((count) => count + 1);
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <div onClick={incrementCount}>Count is {count}</div>
    </>
  )
}

export default App
