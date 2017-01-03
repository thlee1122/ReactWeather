var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>About Component</h3>
// 		)
// 	}
// });

var About = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">About</h1>
			<p className="p-center">This is a weather application built on React.</p>
			<p className="p-center">Search weather by city to get current temperature of that city.</p>
			<p className="p-center">
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This Weather Application is built on React.
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather Map</a> - I use API from Open Weather Map to search for weather data by city name.
					</li>
				</ul>
			</p>
		</div>
	)
}
module.exports = About;