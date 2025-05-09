

import Avatar from './images/GameAvatar.png';
import Pause from './images/pause.png'

export default function Header() {

  return(
    <nav>
      <div className="header">
        
        <div className="navLeft">
          <div className="score-container container">
            <p className="score">Score</p>
            <p className="scoreValue box">650</p>
          </div>

          <div className="coins-container container">
            <p className="coins">Coins</p>
            <p className="coinValue box">100</p>
          </div>
        </div>

        <div className="LevelBox">
          <h3 className="level2">Level 2</h3>
        </div>

        <div className="righthead">
          <img src={Pause} alt="" className="pause" />
          <img src={Avatar} alt="" className="gameAvatar" />
        </div>
      </div>
    </nav>
  )
}