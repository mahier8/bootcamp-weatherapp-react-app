import React from "react";
import reactDom from "react-dom";
import CardWeather from "./CardWeather";
class ListWeatherCards extends React.Component{
    renderCards(weatherInfos) {
        console.log(weatherInfos);
        let cards = [];
        for (let i=0; i<40; i+=8) {
            let data = weatherInfos.list[i];
            let icon = data.weather[0].icon;
            let temp = data.main.temp + "ㅇc";
            let desc = data.weather[0].description;
            cards.push(
                <CardWeather
                    key={i}
                    icon={icon}
                    temp={temp}
                    desc={desc}
                />
            );
        }
        return cards;
    }
    render () {
        return (
            <div>
                List of cards
                <div className="cardContainer">{this.renderCards(this.props.items)}</div>
            </div>
        );
    }
}

export default ListWeatherCards;