import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((count) => count + 1);

  return (
    <>
      <p onClick={incrementCount}>Count is {count}</p>
    </>
  )
}

export default App
