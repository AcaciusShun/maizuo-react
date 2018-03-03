import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Home from './components/Home';
import Film from './components/Film';
import List from './components/List';
import Todo from './components/Todo';
import "./style/app.css";
class App extends Component {
  	constructor(){
		super();
		this.state = {
			title :"卖座电影",
			flag:true
		};
		this.changeFlag = this.changeFlag.bind(this);
	}
	changeFlag(){
		this.setState({
			flag:!this.state.flag
		})
	}
  render() {
  	var nav = <ul><li><Link to="/">首页 <span>&gt;</span></Link></li><li><Link to="film">影片 <span>&gt;</span></Link></li><li><Link  to="/">影院 <span>&gt;</span></Link></li><li><Link  to="/">商城<span>&gt;</span></Link></li><li><Link  to="/">我的<span>&gt;</span></Link></li><li><Link  to="/">卖座卡 <span>&gt;</span></Link></li></ul>;
  	var bg = <div className="bg"></div>;
  	if(this.state.flag){
  		nav = null;
  		bg = null;
  	}
  	
    return (
    <Router>	
      <div className="App">
      	<header>
      		
      		<div onClick= {this.changeFlag}>
      			<span className="iconfont">&#xe667;</span>{this.state.title}
      			<ReactCSSTransitionGroup
		          transitionName="nav"
		          transitionEnterTimeout={800}
		          transitionLeaveTimeout={800}>
		          	{nav}
	         		 
	       		</ReactCSSTransitionGroup>
	       		<ReactCSSTransitionGroup
		          transitionName="bg"
		          transitionEnterTimeout={800}
		          transitionLeaveTimeout={800}>
		          	{bg}
	         	</ReactCSSTransitionGroup>
      		</div>
      		<div className="address">北京 <span className="iconfont">&#xe693;</span><span className="iconfont me">&#xe610;</span></div>
      		
	          	

      		
      	</header>
      	<footer>
      		<Route exact path="/" component={Home}/>
      		<Route path="/film/:fid" component={Film}/>
      		<Route path="/list" component = {List} />
      			
			
      	</footer>
      </div>
	</Router>
    );
  }
}

export default App;
