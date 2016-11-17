var React = require('react');

module.exports = React.createClass({
	render: function(){

		return(
			<div>
				your viewing product #{this.props.params.itemId}
			</div>
		)
	}
})