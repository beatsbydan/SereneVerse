import React from 'react'
import './Tracker.css'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card/Card'
import StreakControl from './StreakControl/StreakControl'

const Tracker:React.FC = () => {
  return (
    <div className="tracker">
      <div className="streaks">
        <Card desc='Streaks'>
          <StreakControl/>
        </Card>
      </div>
      <p className='motivationQuote'>
        Keep your momentum going! Track your progress effortlessly with our therapy app's streak feature. 
        Watch your achievements build up day by day as you stay committed to your mental wellness journey.
      </p>
      <div className="bar"></div>
      <div className="progressTracker">
        <Card desc='Progress Tracking'>{}</Card>
      </div>
    </div>
  )
}

export default Tracker