import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState } from './sessionStorage';
import reducer from './reducers';

const persistedState = loadState();

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));
