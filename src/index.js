import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducersOption from './reducers/index';
import "./style/index.css";

const reducers = combineReducers(reducersOption);
const store =createStore(reducers ,{});

function renderPage(){
	ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));	
}
renderPage();
store.subscribe(renderPage);
registerServiceWorker();
