


import { useState } from 'react';
import './App.css';
import Header from './header';
import './header.css';
import Flip from './images/flip1.png';
import Clock from './images/clock.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="timeer">
        <img src={Clock} alt="clock" className="clock" />
        <h3 className="time">1:00</h3>
      </div>
      <div className="rectangle">
        <img src={Flip} alt="" className="flip flip1" />
        <img src={Flip} alt="" className="flip flip2" />
        <img src={Flip} alt="" className="flip flip3" />
        <img src={Flip} alt="" className="flip flip4" />
        <img src={Flip} alt="" className="flip flip5" />
        <img src={Flip} alt="" className="flip flip6" />
      </div>

    </>
  )
}

export default App
