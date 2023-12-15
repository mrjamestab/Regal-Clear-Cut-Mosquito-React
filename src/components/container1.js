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
            {props.HeroButton11}
          </button>
          <button className="container1-hero-button12 button">
            {props.HeroButton12}
          </button>
          <button className="container1-hero-button13 button">
            {props.HeroButton13}
          </button>
          <button className="container1-hero-button14 button">
            {props.HeroButton14}
          </button>
        </div>
      </div>
      <div className="container1-container3">
        <button className="container1-hero-button15 button">
          {props.HeroButton15}
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
}

Container1.propTypes = {
  HeroHeading: PropTypes.string,
  HeroButton1: PropTypes.string,
  HeroButton11: PropTypes.string,
  HeroButton12: PropTypes.string,
  HeroButton13: PropTypes.string,
  HeroButton14: PropTypes.string,
  HeroButton15: PropTypes.string,
}

export default Container1
