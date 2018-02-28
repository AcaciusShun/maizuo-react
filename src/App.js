import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';
import Home from './components/Home.js'
import Orders from "./components/Orders.js";
import Detail from "./components/Detail";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
	      	<NavLink to="/">主页</NavLink>
	      	<NavLink to="/orders">订单</NavLink>
					<NavLink to="/detail">详情页</NavLink>
					<NavLink to="/todolist">待办事项</NavLink>

					<Route exact path="/" component={Home} />
					<Route  path="/orders" component={Orders} />
					<Route path="/detail/:fid" component={Detail} />
					<Route path="/todolist" component={TodoList} />
	      </div>
	  </Router>
    );
  }
}

export default App;
