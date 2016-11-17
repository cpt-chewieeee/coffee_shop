var React = require('react');
var Thumbnail = require('react-bootstrap/lib/Thumbnail');
module.exports = React.createClass({
	render: function(){
		// console.log('list-item', this.props);
		var imgSrc = '/img/coffee_machines/' + this.props.type + '.png';
		var selected = ''
		if(this.props.selectedId !== null && this.props.selectedId === this.props.info.id){
			selected = 'selected';
		}
		return (
			<div className={"list-item-card " + selected}>
				<div onClick={this.handleClick}>
					<p className="text-center"><img src={imgSrc} /></p>
					<h4>{this.props.info.name}</h4>
					<p className="text-right">{this.props.info.price}</p>
					<p className="text-right">#{this.props.info.id}</p>
				</div>
				<p className="text-right">	
					{(this.props.user? <button className="btn btn-default" onClick={this.addToCart}><i className="fa fa-plus"></i></button> : '')}
					<button className="btn btn-primary" onClick={this.navToItem}>View Product</button>
					
				</p>
			</div>
		)
	},
	navToItem: function(){
		location.href = '#/item/' + this.props.info.id;
	},
	handleClick: function(){
		var info = {
			type: this.props.type, 
			id: this.props.info.id
		}
		this.props.selectCoffee(info);
	},
	addToCart: function(){
		console.log('adding to cart');
	}
})