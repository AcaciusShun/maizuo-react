import React, {Component} from 'react';
import Hot from "./list/Hot";
import Future from "./list/Future";
import {Route,NavLink} from 'react-router-dom';
import "../style/list.css";
export default class List extends Component {
	render() {
		return (
			
				<div className="list">
					<div className="lnav" >
						<NavLink  activeClassName = "active" to="/list/hot">正在热映</NavLink>
						<NavLink  activeClassName = "active" to="/list/future">即将上映</NavLink>
					</div>
					<Route path="/list/hot" component = {Hot}/>
					<Route path="/list/future" component = {Future}/>
				</div>
			
		)
	}
}