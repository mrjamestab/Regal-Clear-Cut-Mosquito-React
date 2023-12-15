import React from 'react'

import PropTypes from 'prop-types'

import './hero-heading.css'

const HeroHeading = (props) => {
  return (
    <div className="hero-heading-container">
      <h1 className="hero-heading-hero-heading heading1">
        {props.HeroHeading}
      </h1>
    </div>
  )
}

HeroHeading.defaultProps = {
  HeroHeading: '8:00:00,00',
}

HeroHeading.propTypes = {
  HeroHeading: PropTypes.string,
}

export default HeroHeading
