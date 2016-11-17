var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Panel = require('react-bootstrap/lib/Panel');

var ListItem = require('./list-item');

module.exports = React.createClass({
	render: function(){
		var all_products = [];
		for(var key in this.props.products){
			for(var j = 0; j < this.props.products[key].length; j++){
				all_products.push(<ListItem 
					key={key + '-' + j} 
					type={key} 
					info={this.props.products[key][j]}
					user={this.props.user}
					selectCoffee={this.props.selectCoffee}
					selectedId={this.props.selectedId}
				/>)
			}
		}
		return (
			<Panel header={'Coffee Machines'}>
				<div>
					{all_products}
				</div>
			</Panel>
			
		)
	}
})