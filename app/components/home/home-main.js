var React = require('react');


var ProductList = require('./product-list');

module.exports = React.createClass({
	render: function(){

		if(!this.props.products) {
			return (<div>fetching data. loading...</div>)
		}
		var product_list = [];
		for(var key in this.props.products){
			product_list.push(<ProductList key={key} productType={key} products={this.props.products[key]}/>)
		}

		return (
			<div className="container-fluid">
				{product_list}
			</div>
		)
	}
})