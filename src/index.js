import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import * as serviceWorker from './serviceWorker';

//同步测试
ReactDOM.render(<Life />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
