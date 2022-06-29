import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <div className="score-timer-board">
        <div className="score-board">
          <p className="score">
            Score: <span>{score}</span>
          </p>
        </div>
        <div className="timer-board">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="time-text">{timer} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
