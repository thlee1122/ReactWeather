var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;

//     return (
//       <h3>It's it {temp} in {location}.</h3>
//     )
//   }
// });

var WeatherMessage = ({temp, location, weather, forecast}) => {
	// var {temp, location} = props;

    return (
    	<div>
        	<h3 className="text-center">Current weather condition is <strong>{weather}</strong> and it is <strong>{temp} ˚F</strong> in <strong>{location}.</strong></h3>
        </div>
    )
}

module.exports = WeatherMessage;


//7 day forecast part
// <p className="p-center">
//         		7 Days weather forecasts for <strong>{location}</strong>.
//         	</p>
//         	<ol className="ol-center">
//         		<li>Day 1: {forecast}</li>
//         	</ol>
