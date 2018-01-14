import React from 'react'
import 'array-intersperse'
import {Helmet} from 'react-helmet'

const ReactCustomAmpersand = ({color, lineHeight, fontName}) => {
  return (
    <span style={{
      color,
      lineHeight,
      fontFamily: `${fontName}, serif`,
    }}>
    <Helmet>
      <link href={`https://fonts.googleapis.com/css?family=${fontName.replace(' ', '+')}&amp;text=%26`} rel="stylesheet" />
    </Helmet>
    &
    </span>
  )
}

ReactCustomAmpersand.PropTypes = {
  color: React.PropTypes.String,
  fontName: React.PropTypes.String,
  lineHeight: [
    React.PropTypes.Number,
    React.PropTypes.String,
  ],
}

ReactCustomAmpersand.defaultProps = {
  color: 'rebeccapurple',
  fontName: 'Playfair Display',
  lineHeight: .9
}

export default ReactCustomAmpersand

// helper function to find/replace
// plain ampersands with this component

export const applyCustomAmpersands = function(content, props) {
  return content.split('&').intersperse(React.createElement(ReactCustomAmpersand, props))
}
