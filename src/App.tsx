import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Options from './components/Options';
import Reps from './components/Reps';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Options />
      <Reps />
    </div>
  )
}

export default App
