import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <ul className="app-component-ul custom-list list">
      <li className="app-component-li list-item">
        <span className="app-component-text">{props.text}</span>
      </li>
      <li className="app-component-li1 list-item">
        <span className="app-component-text1">{props.text1}</span>
      </li>
      <li className="app-component-li2 list-item">
        <span className="app-component-text2">{props.text2}</span>
      </li>
      <li className="app-component-li3 list-item">
        <span className="app-component-text3">{props.text3}</span>
      </li>
    </ul>
  )
}

AppComponent.defaultProps = {
  text: 'cepsa',
  text1: 'walmart',
  text2: 'truedat',
  text3: 'bluetab\n',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default AppComponent
