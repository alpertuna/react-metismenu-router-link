[![Build Status](https://travis-ci.org/alpertuna/react-metismenu-router-link.svg?branch=master)](https://travis-ci.org/alpertuna/react-metismenu-router-link)

# react-metismenu-router-link

Router link extension for `react-metismenu` menu component to work with [react-router](https://github.com/reactjs/react-router).

For full documantion please visit [react-metismenu](https://github.com/alpertuna/react-metismenu).

**Important Note:** To use `react-metismenu-router-link`, `react-metismenu` should be at least `v0.4.2`.

# Install

```console
$ npm install --save react-metismenu-router-link
```

# Usage Example
I think, example is enough to tell.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Menu from 'react-metismenu';
import RouterLink from 'react-metismenu-router-link';

const content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        to: 'a-route-path'
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: 'another-route-path'
            }
        ]
    },
];

const App = () => (
  <div>
    <Menu content={content} LinkComponent={RouterLink} />
  </div>
);

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
```
