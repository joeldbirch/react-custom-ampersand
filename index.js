'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyCustomAmpersands = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  color: _propTypes2.default.String,
  fontName: _propTypes2.default.String,
  lineHeight: [_propTypes2.default.Number, _propTypes2.default.String]
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
  var bits = content.split('&');
  return bits.slice(1).reduce(function (xs, x, i) {
    var ampersand = _react2.default.createElement(ReactCustomAmpersand, Object.assign({ key: 'unnecessaryKey' + i }, props));
    return xs.concat([ampersand, x]);
  }, [bits[0]]);
};
