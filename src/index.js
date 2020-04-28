import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';

const store= createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><MainComponent /></Provider>  , document.getElementById('root'));