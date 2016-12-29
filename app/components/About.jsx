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
			<h1 className="text-center">About</h1>
			<p>This is a weather application build on React. I have built this
			for The Complete React Web App Developer Course.</p>
			<p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
					</li>
				</ul>
			</p>
		</div>
	)
}
module.exports = About;