import React from 'react'

import PropTypes from 'prop-types'

import './container1.css'

const Container1 = (props) => {
  return (
    <div className="container1-container">
      <div className="container1-container1">
        <h1 className="container1-hero-heading heading1">
          {props.HeroHeading}
        </h1>
      </div>
      <div className="container1-container2">
        <div className="container1-btn-group">
          <button className="container1-hero-button1 button">
            {props.HeroButton1}
          </button>
          <button className="container1-hero-button11 button">
            {props.HeroButton19}
          </button>
          <button className="container1-hero-button12 button">
            {props.HeroButton18}
          </button>
          <button className="container1-hero-button13 button">
            {props.HeroButton17}
          </button>
          <button className="container1-hero-button14 button">
            {props.HeroButton16}
          </button>
        </div>
      </div>
      <div className="container1-container3">
        <button className="container1-hero-button15 button">
          {props.HeroButton161}
        </button>
      </div>
    </div>
  )
}

Container1.defaultProps = {
  HeroHeading: '8:00:00,00',
  HeroButton1: 'Walmart',
  HeroButton11: 'Bluetab',
  HeroButton12: 'Truedat',
  HeroButton13: 'Cepsa',
  HeroButton14: 'Cepsa',
  HeroButton15: '+',
  HeroButton16: 'Walmart',
  HeroButton17: 'Walmart',
  HeroButton18: 'Walmart',
  HeroButton19: 'Walmart',
  HeroButton161: '+',
}

Container1.propTypes = {
  HeroHeading: PropTypes.string,
  HeroButton1: PropTypes.string,
  HeroButton11: PropTypes.string,
  HeroButton12: PropTypes.string,
  HeroButton13: PropTypes.string,
  HeroButton14: PropTypes.string,
  HeroButton15: PropTypes.string,
  HeroButton16: PropTypes.string,
  HeroButton17: PropTypes.string,
  HeroButton18: PropTypes.string,
  HeroButton19: PropTypes.string,
  HeroButton161: PropTypes.string,
}

export default Container1
