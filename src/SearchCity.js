import React from "react";
import reactDOM from "react-dom";

class SearchCity extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.props.handleChange(e);
    }
    handleSubmit(e) {
        this.props.handleSubmit(e);
        e.preventDefault();
    }

    render () {
        let cityName = "";
        if(this.props.searchCity) {
            cityName = this.props.searchCity;
        }

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchCity" id="searchcity" onChange={this.handleChange} placeholder="Enter a city"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchCity;
