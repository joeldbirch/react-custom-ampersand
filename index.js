'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyCustomAmpersands = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('array-intersperse');

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactCustomAmpersand = function ReactCustomAmpersand(_ref) {
  var color = _ref.color,
      lineHeight = _ref.lineHeight,
      fontName = _ref.fontName;

  return _react2.default.createElement(
    'span',
    { style: {
        color: color,
        lineHeight: lineHeight,
        fontFamily: fontName + ', serif'
      } },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=' + fontName.replace(' ', '+') + '&amp;text=%26', rel: 'stylesheet' })
    ),
    '&'
  );
};

ReactCustomAmpersand.PropTypes = {
  color: _react2.default.PropTypes.String,
  fontName: _react2.default.PropTypes.String,
  lineHeight: [_react2.default.PropTypes.Number, _react2.default.PropTypes.String]
};

ReactCustomAmpersand.defaultProps = {
  color: 'rebeccapurple',
  fontName: 'Playfair Display',
  lineHeight: .9
};

exports.default = ReactCustomAmpersand;

// helper function to find/replace
// plain ampersands with this component

var applyCustomAmpersands = exports.applyCustomAmpersands = function applyCustomAmpersands(content, props) {
  return content.split('&').intersperse(_react2.default.createElement(ReactCustomAmpersand, props));
};