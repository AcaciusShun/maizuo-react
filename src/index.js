import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import reducersOption from "./reducers/index";
import { Provider } from "react-redux";

const reducers = combineReducers(reducersOption)
const store = createStore(reducers, {})


//JSX渲染DOM
function renderPage() { 
// ReactDOM.render(<App store = {store} />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);

}
//描绘一次
renderPage();


//描绘页面 ↑ 抽成函数
//注册回调

//每次页面改变 描绘一次
store.subscribe(renderPage);
registerServiceWorker();
