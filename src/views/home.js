import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regal Clear Cut Mosquito</title>
        <meta property="og:title" content="Regal Clear Cut Mosquito" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">COUNTDOWN</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="home-nav1">About</span>
              <span className="home-nav2">Features</span>
              <span className="home-nav3">Pricing</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="home-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">COUNTDOWN</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">About</span>
                <span className="home-nav21">Features</span>
                <span className="home-nav31">Pricing</span>
                <span className="home-nav4">Team</span>
                <span className="home-nav5">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button">Login</button>
                <button className="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-container1">
          <div className="home-container2">
            <h1 className="home-hero-heading heading1">8:00:00,00</h1>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Walmart</button>
              <button className="home-hero-button11 button">Bluetab</button>
              <button className="home-hero-button12 button">Truedat</button>
              <button className="home-hero-button13 button">Cepsa</button>
              <div className="home-container3">
                <button className="home-hero-button14 button">+</button>
              </div>
            </div>
          </div>
          <section className="home-container4">
            <ul className="home-ul custom-list list">
              <li className="home-li list-item">
                <span className="home-text">cepsa</span>
              </li>
              <li className="home-li1 list-item">
                <span className="home-text1">walmart</span>
              </li>
              <li className="home-li2 list-item">
                <span className="home-text2">truedat</span>
              </li>
              <li className="home-li3 list-item">
                <span className="home-text3">bluetab</span>
              </li>
            </ul>
            <ul className="home-ul1 custom-list list">
              <li className="home-li4 list-item">
                <span className="home-text4">cepsa</span>
              </li>
              <li className="home-li5 list-item">
                <span className="home-text5">walmart</span>
              </li>
              <li className="home-li6 list-item">
                <span className="home-text6">truedat</span>
              </li>
              <li className="home-li7 list-item">
                <span className="home-text7">bluetab</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="home-details"></div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container5">
              <FeatureCard
                Heading="Countdown Timer"
                SubHeading="Track the remaining time from 8 hours to 0 hours, representing a work day."
              ></FeatureCard>
              <FeatureCard
                Heading="Customizable Buttons"
                SubHeading="Add and customize buttons to represent different tasks throughout the day."
              ></FeatureCard>
              <FeatureCard
                Heading="Task Management"
                SubHeading="Efficiently manage your tasks using the customizable buttons and track your progress."
              ></FeatureCard>
              <FeatureCard
                Heading="Pomodoro Clock"
                SubHeading="Utilize the Pomodoro technique by setting time intervals for focused work and breaks."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery"></div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Boost Your Productivity
          </h1>
          <span className="home-banner-sub-heading">
            Efficiently manage your tasks with our intuitive countdown timer
          </span>
          <button className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container"></div>
      </div>
      <div className="home-footer"></div>
    </div>
  )
}

export default Home
