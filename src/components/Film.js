import React, {Component} from 'react';
//import { Route, NavLink} from 'react-router-dom';
import axios from "axios";
import "../style/film.css";
export default class Film extends Component {
	constructor(props){
		super(props);
		this.state={
			imgSrc :"",
			director:"",
			actors:[],
			nation:"",
			language:"",
			category:"",
			time:100,
			synopsis:""
		}
	}
	componentDidMount(){
		var id = this.props.match.params.fid;
		axios.get("/v4/api/film/" + id)
		.then((res)=>{
			var film = res.data.data.film;
			this.setState({
				imgSrc : film.cover.origin,
				director : film.director,
				actors:film.actors,
				nation:film.nation,
				language:film.language,
				category:film.category,
				time :film.premiereAt,
				synopsis : film.synopsis
			})
		})
	}
	render() {
		var date = new Date(this.state.time);
		var M = date.getMonth() + 1;
		var D = date.getDate();
		return (
			<div className="film">
				<img src={this.state.imgSrc} alt=""/>
				<div className="film-word1" >影片简介</div>
				<div className="film-word2">
					<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
					<span>{this.state.director}</span>
				</div>
				<div className="film-word2">
					<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
					<span>{this.state.actors.map(function(item){
						return <span key={item.name}>{item.name} | </span>
					})}</span>
				</div>
				<div className="film-word2">
					<span>地区语言：</span>
					<span>{this.state.nation}</span>
					<span>(</span><span>{this.state.language}</span><span>)</span>
				</div>
				<div className="film-word2">
					<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
					<span>{this.state.category}</span>
				</div>
				<div className="film-word2">
					<span>上映日期：</span>
					<span>{M}月{D}日上映</span>
				</div>
				<div className="film-word3">
					{this.state.synopsis}
				</div>
				<button className="cpn-primary-button">立即购票</button>
			</div>
		)
	}
}