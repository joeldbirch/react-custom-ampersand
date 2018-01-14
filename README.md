# React Custom Ampersand

This React component can replace plain ampersand characters with styled span tags containing a custom Google Font ampersand character.

Only a single character of the Google Font of your choice is downloaded. You can set the optional props to override the styling defaults, which are:

```javascript
{
    color: 'rebeccaPurple',
    lineHeight: '.9',
    fontFamily: 'Playfair Display'
}
```

## Installation

Yarn:
```bash
yarn add react-custom-ampersand
```

npm:
```bash
npm install react-custom-ampersand
```


## Usage Example

```javascript
import React from 'react';
import ReactCustomAmpersand from 'react-custom-ampersand';

class YourHeadingComponent extends React.Component {
  render () {
    return (
      <h1>
        This is a heading <ReactCustomAmpersand/> it contains a fancy ampersand.
      </h1>
    );
  }
};
```

outputs:

```html
// reference to Google Font "&" character automatically added to the `head` element:
<link href="https://fonts.googleapis.com/css?family=Playfair+Display&amp;amp;text=%26" rel="stylesheet" data-react-helmet="true">

// your content in the `body` element:
<h1> This is a heading <span style="color:rebeccapurple;line-height:.9;font-family: Display Playfair, serif;">&</span> it contains a fancy ampersand.</h1>
```

However, instead of importing the component directly you can import a helper function which will find and replace plain "&" characters with an instance of the ReactCustomAmpersand component. For example:

```javascript
import React from 'react';
import {applyCustomAmpersands} from 'react-custom-ampersand';

class YourHeadingComponent extends React.Component {
  render () {
    // using a `myHeadingText` variable here, but you could use props.children instead
    const myHeadingText = 'This is a heading & it contains a fancy ampersand.'
    return (
      <h1>
        {applyCustomAmpersands(myHeadingText)}
      </h1>
    );
  }
};
```

outputs:

```html
// reference to Google Font "&" character automatically added to the `head` element:
<link href="https://fonts.googleapis.com/css?family=Playfair+Display&amp;amp;text=%26" rel="stylesheet" data-react-helmet="true">

// your content in the `body` element:
<h1> This is a heading <span style="color:rebeccapurple;line-height:.9;font-family: Display Playfair, serif;">&</span> it contains a fancy ampersand.</h1>
```

And, of course, you could pass in your own props to alter the styling, like so:

```javascript
import React from 'react';
import {applyCustomAmpersands} from 'react-custom-ampersand';

class YourHeadingComponent extends React.Component {
  render () {
    // using a `myHeadingText` variable here, but you could use props.children instead
    const myHeadingText = 'This is a heading & it contains a fancy ampersand.'
    return (
      <h1>
        {
            applyCustomAmpersands(myHeadingText, {
                color: '#bada55',
                lineHeight: '1.4',
                fontName: 'Abril Fatface'
            })
        }
      </h1>
    );
  }
};
```

outputs:

```html
// reference to Google Font "&" character automatically added to the `head` element:
<link href="https://fonts.googleapis.com/css?family=Abril+Fatface&amp;amp;text=%26" rel="stylesheet" data-react-helmet="true">

// your content in the `body` element:
<h1> This is a heading <span style="color:#bada55;line-height:1.4;font-family: Abril Fatface, serif;">&</span> it contains a fancy ampersand.</h1>
```


## License

MIT
