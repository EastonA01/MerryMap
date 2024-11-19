import { useState } from 'react'
import './App.css'
import MapInterface from './components/mapInterface'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MapInterface/>
      <h2>To Edit The Map.....</h2>
      <a href='https://www.google.com/maps/d/edit?mid=1R9_K86KnHqiBoCPGvfOHsZkPcAZeJVc&usp=sharing'>Click here</a>


      <p>Inspired by <a href='https://www.wilmingtonchristmaslights.com/map'>this</a> project!</p>
    </>
  )
}

export default App
