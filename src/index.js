import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App'

const Store = createStore(rootReducer)


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
<Provider store={ Store }>
<App />
</Provider>,document.querySelector('.container')
);