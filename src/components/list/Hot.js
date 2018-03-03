import React, {Component} from 'react';
import axios from 'axios';
import "../../style/hot.css";
import {Link} from 'react-router-dom';
export default class Hot extends Component {
	constructor(props){
		super(props);
		this.state = {
			list : []
		}
	}
	componentWillMount(){
		axios.get("/v4/api/film/now-playing?page=1&count=20")
		.then((res) =>{
			this.setState({
		        list:res.data.data.films
		    })
		})
	}
	render() {
		return (
			<div className="playing">
				<ul>	
					{
						this.state.list.map(function(item,index){
							return (
								<li key={item.id}>
									<Link to={"/film/"+item.id}>
										<img src={item.poster.origin} alt=""/>
										<div>
											<div>
												<h6>{item.name}</h6>
												<p>{item.grade} &gt;</p>
											</div>
											<div>
												{item.intro} 
											</div>
											<div>
												<span>{item.cinemaCount}家影院上映</span>
												<span>{item.watchCount}人购票</span>
											</div>
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