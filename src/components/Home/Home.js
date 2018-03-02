import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";
import Movie from "../Movie/Movie";
import Nav from "../common/Nav/Nav";
// import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
        this.changeFlag = this.changeFlag.bind(this);
    }
    changeFlag() {
        this.setState({
            flag: !this.state.flag,
            city:""
        })
    }

    componentDidMount = () => {
      var that = this;
      var BMap = window.Bamp;
      var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
                var geoc = new BMap.Geocoder();
                geoc.getLocation(r.point, function (rs) {
                    var addComp = rs.addressComponents;
                    that.setState({
                        city: addComp.city
                    })
                });
            }
        }, { enableHighAccuracy: true })
    }
    





    render() {
        var nav = <Nav change={this.changeFlag} />;
        if (this.state.flag === false) {
            nav = null;
        }
        return (
            <div className="home">
                {nav}
                {/* <ReactCSSTransitionGroup>
                    
                </ReactCSSTransitionGroup> */}
                <header>
                    <ul>
                        <li className="iconfont icon-sanhengxian" onClick={this.changeFlag}></li>
                        <li>卖座电影</li>
                    </ul>
                    <ul>
                        <li>北京</li>
                        <li>{this.state.city}</li>                        
                        <li className="iconfont icon-jiantouxia"></li>
                        <li className="iconfont icon-xiaoren"></li>
                    </ul>
                </header>
                <section>
                    <Route path="/movie" component={Movie} />
                </section>
            </div>
        )
    }
}

export default Home