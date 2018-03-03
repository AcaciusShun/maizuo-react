import React , {Component} from 'react' ;
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "../style/home.css";
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      slideIndex: 0,
      hot :[],
      newFilm:[]
    };
  }
  
  componentDidMount() {
    axios.get("/v4/api/billboard/home?__t=1519277282247")
    .then((res)=>{
      this.setState({
        data: res.data.data.billboards
      });
    });
    axios.get("/v4/api/film/now-playing?__t=1519307559806&page=1&count=5")
    .then((res)=>{
      this.setState({
        hot: res.data.data.films
      });
    });
    axios.get("/v4/api/film/coming-soon?__t=1519627730933&page=1&count=3")
    .then((res)=>{
      this.setState({
        newFilm: res.data.data.films
      });
    });
  }
  render() {

    return (
      <div>
        <WingBlank>
          <Carousel autoplay={true} autoplayInterval = {2000} infinite = {true} selectedIndex={0} dots =  {false}>
            {this.state.data.map(function(val){
              return(
                <span
                  key={val.id}
                  style={{ display: 'inline-block', width: '100%'}}
                >
                  <img
                    src={val.imageUrl}
                    alt=""
                    style={{ width: '100%',height:'3.6rem', verticalAlign: 'top' }}
                    
                  />
                </span>
              )
            })

            }
          </Carousel>
  	   </WingBlank>
       <ul className= "hot">
            {
              this.state.hot.map(function(item){
                return (
                  <li key={item.id}>
                    <Link to={"/film/" + item.id}>
                      <img src={item.cover.origin} alt=""/>
                      <div className="detail">
                        <div>
                          <h6>{item.name}</h6>
                          <p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
                        </div>
                        <div className="grade">
                          {item.grade}
                        </div>
                        
                      </div>
                      
                    </Link>
                  </li>
                )
              
              })
            }
            <div className="More"><Link to="list/hot">更多热映电影</Link></div>      
       </ul>
       <div className="future">
         <div className="topBorder">
           <div>即将上映</div>
         </div>
         <ul className="new">
           {
              this.state.newFilm.map(function(item){
                var date = new Date(item.premiereAt);
                var M = date.getMonth()+1;
                var D = date.getDate();
                return (
                  <li key={item.id}>
                    <Link to={"/film/" + item.id}>
                      <img src={item.cover.origin} alt=""/>
                      <div className="intro">
                        <div className="name">{item.name}</div>
                        <div className="grade">{M
                        }月{D}日上映</div>
                      </div>
                      
                    </Link>
                  </li>
                )
              
              })
            }
            <div className="More"><Link to="list/future">更多即将上映电影</Link></div>
         </ul>
       </div>
      </div>
    );
  }
}

