import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import intro from '../../../../Assets/images/home-intro-bg.svg'
import resourcesBg from '../../../../Assets/images/resources-bg.svg'
import trackerBg from '../../../../Assets/images/tracker-bg.svg'
import Button from '../../../../UI/Button/AppButton/Button'

const Home:React.FC = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <div className="home-introLeft">
          <h1>Get the <span>help you need</span><span>from SereneVerse</span></h1>
          <Link to="/tracker">Start a streak</Link>
        </div>
        <img src={intro} alt="" />
      </div>
      <div className="postForTheDay">
        <div className="post-title">
          <h4>Post for the day</h4>
        </div>
        <div className="post">

        </div>
        <Button
          text="Comment >"
          actionHandler={()=>{}}
        />
      </div>
      <div className="featuresOverview">
        <div className="feature">
          <div className="feature--about">
            <h1>Get Matched with a Therapist.</h1>
            <p>
              Find the perfect match for your mental health journey with our intuitive therapy sessions. 
              Our advanced algorithm connects you with licensed therapists who specialize in your specific needs and preferences, 
              ensuring a tailored experience that fosters growth and healing. Say goodbye to the uncertainty of finding the right therapist – 
              let us guide you towards the support you deserve, conveniently and confidentially.
            </p>
            <Link to="/resources">Resources</Link>
          </div>
          <div className="feature--bg">
            <img src={resourcesBg} alt="" />
          </div>
        </div>
        <div className="feature">
          <div className="feature--about">
            <h1>Start Tracking Your Progress.</h1>
            <p>
            Begin monitoring your progress today. Our therapy app provides the tools you need to track your journey towards better mental health. 
            Stay motivated and see your improvements over time with easy-to-use tracking features.
            </p>
            <Link to="/tracker">Tracker</Link>
          </div>
          <div className="feature--bg">
            <img src={trackerBg} alt="" />
          </div>
        </div>
      </div>
      <div className="whySereneVerse">
        <h1>Why SereneVerse?</h1>
        <p>
          Discover a transformative journey to mental well-being with our therapy app. 
          Seamlessly designed to prioritize your comfort and progress, our platform offers personalized support tailored to your unique needs.
          From convenient appointment scheduling to insightful goal tracking, we're here to empower you every step of the way. 
          Join our community today and embark on a path towards lasting positive change.
        </p>
      </div>
    </div>
  )
}

export default Home