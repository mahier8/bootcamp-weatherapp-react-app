import React from "react";
import reactDom from "react-dom";

class CardWeather extends React.Component {
    render () {
        let imgSrc= "http://openweathermap.org/img/wn/"+this.props.icon+"@2x.png";
        return(
            <div className="card">
                <div>{this.props.temp}</div>
                <div><img src={imgSrc} alt="weathericon"/></div>
                <div>{this.props.desc}</div>
            </div>
        );
    }
}
export default CardWeather;