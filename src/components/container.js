import React from 'react'

import PropTypes from 'prop-types'

import './container.css'

const Container = (props) => {
  return (
    <div className="container-container">
      <h1 className="container-hero-heading heading1">{props.HeroHeading}</h1>
      <div className="container-btn-group">
        <button className="container-hero-button1 button">
          {props.HeroButton1}
        </button>
        <button className="container-hero-button11 button">
          {props.HeroButton11}
        </button>
        <button className="container-hero-button12 button">
          {props.HeroButton12}
        </button>
        <button className="container-hero-button13 button">
          {props.HeroButton13}
        </button>
        <div className="container-container1">
          <button className="container-hero-button14 button">
            {props.HeroButton14}
          </button>
        </div>
      </div>
    </div>
  )
}

Container.defaultProps = {
  HeroHeading: '8:00:00,00',
  HeroButton1: 'Walmart',
  HeroButton11: 'Bluetab',
  HeroButton12: 'Truedat',
  HeroButton13: 'Cepsa',
  HeroButton14: '+',
}

Container.propTypes = {
  HeroHeading: PropTypes.string,
  HeroButton1: PropTypes.string,
  HeroButton11: PropTypes.string,
  HeroButton12: PropTypes.string,
  HeroButton13: PropTypes.string,
  HeroButton14: PropTypes.string,
}

export default Container
