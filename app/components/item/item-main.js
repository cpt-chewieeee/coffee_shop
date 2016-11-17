var React = require('react');

module.exports = React.createClass({
	render: function(){
		console.log(this.props);
		return(
			<div>

				your viewing product #{this.props.params.itemId}


			</div>
		)
	}
})