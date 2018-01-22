import React from 'react'
import PropTypes from 'prop-types'
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

ReactCustomAmpersand.propTypes = {
  color: PropTypes.String,
  fontName: PropTypes.String,
  lineHeight: [
    PropTypes.Number,
    PropTypes.String,
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
  const bits = content.split('&')
  return bits.slice(1).reduce(function(xs, x, i) {
    const ampersand = React.createElement(ReactCustomAmpersand, Object.assign({key: `unnecessaryKey${i}`}, props) )
    return  xs.concat([ampersand, x])
  }, [bits[0]])
}

