var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<dl className="dl-horizontal">
					{
						this.props.cart.map(function(item, index){
							return (
								<div key={index}>
									<dt>{item.id}</dt>
									<dd>{item.price}</dd>
								</div>
							)
						})
					}
				</dl>
				<div>
					<button className="btn btn-default" onClick={this.goBack}>Go Back</button>
				</div>
			</div>
		)
	},
	goBack: function(){
		location.href = '#';
	}
})