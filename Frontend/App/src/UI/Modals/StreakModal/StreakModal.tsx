import React, { ReactNode } from 'react'

const StreakModal:React.FC<{children: ReactNode}> = (props) => {
  return (
    <div className='streakModal'>
      <div className="streakModal--bg"></div>
      {props.children}
    </div>
  )
}

export default StreakModal