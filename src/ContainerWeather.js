import React from "react";
import reactDOM from "react-dom";
import ListWeatherCards from "./ListWeatherCards";
import SearchCity from "./SearchCity";

class ContainerWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded : false,
            items : null,
            searchCity: '',
            isSubmitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getWeatherFromCity = () => {
        const APP_ID = "hahahhaahaha";
        let city = this.state.searchCity;
        fetch("http://api.openweathermap.org/data/2.5/forecast/?units=metric&q="+city+"&APPID="+APP_ID)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    items : result,
                })
            },
            (error) => {
                this.setState({
                    isLoaded : true,
                    error
                })
            }
        )
        
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name] :value
        });
    }
    handleSubmit =  (event) => {
        this.setState({isSubmitted:true})
        this.getWeatherFromCity();
        event.preventDefault()
    }

    componentDidMount () {
        if(this.state.searchCity && this.state.isSubmitted) {
            this.getWeatherFromCity();
        }
    }
    render () {
        const {error, isLoaded, items} = this.state;
        const values = {
            searchCity: this.state.searchCity
        }
        if(error) {
            return (
                <div>
                    <div className="title">Weather app</div>
                    <div>
                        <SearchCity
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                    <div> Error: {error.message}</div>
                </div>
            )
        }else if(!isLoaded) {
            return (
                <div>
                    <div className="title">Weather app</div>
                    <div>
                        <SearchCity
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            searchCity={values.searchCity}
                        />
                    </div>
                    <div> loading ...</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="title">Weather app</div>
                    <div>
                        <SearchCity
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                    <div>
                        <ListWeatherCards
                            items =  {this.state.items}
                        />
                    </div>
                </div>
                
            )
        }
    }
}

export default ContainerWeather;