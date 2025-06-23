import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('');
 useEffect(() => {
    fetch('http://localhost:5000/api/tester')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <>
      <div>
        Heavens to Murgatroyd! the message is <em>{message}</em>
      </div>
      <h1>Basic Stuff</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
