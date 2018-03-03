import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import "../../style/future.css";
export default class Future extends Component {
	constructor(props){
		super(props);
		this.state = {
			list :[]
		}

	}
	componentDidMount(){
		axios.get("/v4/api/film/coming-soon?page=1&count=10")
		.then((res) =>{
			this.setState({
				list : res.data.data.films
			})
		})
	}
	render() {
		return (
			<div  className="coming">
				<ul>
					{
						this.state.list.map(function(item,index){
							var date = new Date(item.premiereAt);
							var M = date.getMonth()+1;
                			var D = date.getDate();
                			var W = date.getDay();
                			var week =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
							return (
								<li key= {item.id}>
									<Link to={"/film/"+item.id}>
										<img src={item.poster.origin} alt=""/>
										<div>
											<h6>{item.name}</h6>
											<p>{item.intro}</p>
											<div><span>{M}月{D}日上映</span><span>{week[W]}</span></div>
										</div>
									</Link>
								</li>
							)
						})
					}
				</ul>
			
			</div>
		)
	}
}