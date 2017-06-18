[![Build Status](https://travis-ci.org/alpertuna/react-metismenu-router-link.svg?branch=master)](https://travis-ci.org/alpertuna/react-metismenu-router-link)

# react-metismenu-router-link

Router link extension for `react-metismenu` menu component to work with [react-router](https://github.com/reactjs/react-router).

For full documantion please visit [react-metismenu](https://github.com/alpertuna/react-metismenu).

# Install

```console
$ npm install --save react-metismenu-router-link
```

# Demo
Here is a simple demo using router link component in `react-metismenu`. [Go to demo](https://alpertuna.github.io/react-metismenu-router-link)


# Usage Example
I think, example is enough to tell.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MetisMenu from 'react-metismenu';
import RouterLink from 'react-metismenu-router-link';

const content = [
  {
    icon: 'icon-class-name',
    label: 'Label of Item',
    to: 'a-route-path',
  },
  {
    icon: 'icon-class-name',
    label: 'Second Item',
    content: [
      {
        icon: 'icon-class-name',
        label: 'Sub Menu of Second Item',
        to: 'another-route-path',
      },
    ],
  },
];

const App = () => (
  <div>
    <MetisMenu content={content} LinkComponent={RouterLink} />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
```
