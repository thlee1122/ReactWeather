var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;

//     return (
//       <h3>It's it {temp} in {location}.</h3>
//     )
//   }
// });

var WeatherMessage = ({temp, location, weather}) => {
	// var {temp, location} = props;

    return (
      <h3 className="text-center">Current weather condition is <strong>{weather}</strong> and it is <strong>{temp} ˚F</strong> in <strong>{location}.</strong></h3>
    )
}

module.exports = WeatherMessage;
