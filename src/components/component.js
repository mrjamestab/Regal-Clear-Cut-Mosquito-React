import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <ul className={`app-component-ul custom-list list ${props.rootClassName} `}>
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
  text3: 'bluetab\n',
  text2: 'truedat',
  rootClassName: '',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
