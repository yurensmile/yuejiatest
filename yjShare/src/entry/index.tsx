/// <reference path="../../typings/index.d.ts" />

import 'yuejia/style/base.scss';
import 'yuejia/style/mixins.scss';
import 'yuejia/style/variable.scss';
import 'yuejia/utils/urlsearchparams';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../app/launcher';

ReactDOM.render(
  <App />,
  document.getElementById('reactRoot')
);