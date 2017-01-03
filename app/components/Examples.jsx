var React = require('react');
var { Link } = require('react-router');

// var Examples = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>Examples Component</h3>
// 		)
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">How To Use</h1>
			<p className="p-center">Type in the name of the city in the search bar.</p>
			<p className="p-center">Click "Get Weather" button to receive current weather condition of inputted city.</p>
			<p className="p-center last-p">Here are few examples that you can try:</p>
			<ol className="ol-center">
				<li>
					<Link to='/?location=New York'>New York, NY</Link>
				</li>

				<li>
					<Link to='/?location=Boston'>Boston, MA</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;