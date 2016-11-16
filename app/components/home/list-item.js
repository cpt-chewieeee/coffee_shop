var React = require('react');
var Thumbnail = require('react-bootstrap/lib/Thumbnail');
module.exports = React.createClass({
	render: function(){
		// console.log('list-item', this.props)
		var imgSrc = '';
		if(this.props.productType == 'coffee_machines')
			imgSrc = '/img/' + this.props.productType + '/' + this.props.type + '.png';
		else if(this.props.productType == 'coffee_pods'){
			imgSrc = '/img/' + this.props.productType + '/' + this.props.info.coffee_flavor + '.png'
		}
		
		return (
			<div className="list-item-card">
				<div>
					<p className="text-center"><img src={imgSrc} /></p>
					<h4>{this.props.info.name}</h4>
					<p className="text-right">{this.props.info.price}</p>
					<p className="text-right">	
						<button className="btn btn-primary" onClick={this.navToItem}>View Product</button>
					</p>
				</div>
			</div>
		)
	},
	navToItem: function(){
		location.href = '#/item/' + this.props.info.id;
	}
})