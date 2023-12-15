import React from 'react'

import PropTypes from 'prop-types'

import HeroHeading from './hero-heading'
import HeroButton1 from './hero-button1'
import './container.css'

const Container = (props) => {
  return (
    <div className="container-container">
      <HeroHeading></HeroHeading>
      <div className="container-btn-group">
        <HeroButton1></HeroButton1>
        <button className="container-hero-button1 button">
          {props.HeroButton11}
        </button>
        <button className="container-hero-button11 button">
          {props.HeroButton12}
        </button>
        <button className="container-hero-button12 button">
          {props.HeroButton13}
        </button>
        <div className="container-container1">
          <button className="container-hero-button13 button">
            {props.HeroButton14}
          </button>
        </div>
      </div>
    </div>
  )
}

Container.defaultProps = {
  HeroButton11: 'Bluetab',
  HeroButton12: 'Truedat',
  HeroButton13: 'Cepsa',
  HeroButton14: '+',
}

Container.propTypes = {
  HeroButton11: PropTypes.string,
  HeroButton12: PropTypes.string,
  HeroButton13: PropTypes.string,
  HeroButton14: PropTypes.string,
}

export default Container
