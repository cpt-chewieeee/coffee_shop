var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Panel = require('react-bootstrap/lib/Panel');

var ListItem = require('./list-item');

module.exports = React.createClass({
	render: function(){
		var all_products = [];
		var name = (this.props.productType == 'coffee_machines')? 'Coffee Machines' : 'Coffee Pods';
		for(var key in this.props.products){
			
			for(var j = 0; j < this.props.products[key].length; j++){
				all_products.push(<ListItem 
					key={key + '-' + j} 
					productType={this.props.productType} 
					type={key} 
					info={this.props.products[key][j]}
					user={this.props.user}
				/>)
			}
		}
		return (
			<Panel header={name}>
				<div>
					{all_products}
				</div>
			</Panel>
			
		)
	}
})