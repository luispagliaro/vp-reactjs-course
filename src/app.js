import React from 'react';
import ReactDOM from 'react-dom';
import dispatcher from './dispatcher';
import AppView from './app/AppView';

dispatcher.dispatch('APPINIT');

ReactDOM.render(<AppView/>, document.getElementById('root'));
