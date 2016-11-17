var React = require('react');
var Thumbnail = require('react-bootstrap/lib/Thumbnail');
module.exports = React.createClass({
	render: function(){
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
					<p className="text-right">{(this.props.info.type.water_line_compatible? <strong>Water Line</strong> :  <strong className="strike-through">Water Line</strong>)}</p>
					<p className="text-right">#{this.props.info.id}</p>
				</div>
				<p className="text-right machine-action-btns">	
					{(this.props.user? <button className="btn btn-default" onClick={this.addToCart.bind(this, this.props.info.id, this.props.info.price)}><i className="fa fa-plus"></i></button> : '')}
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
	addToCart: function(id, price){
		if(this.props.addMachine){
			this.props.addMachine(id, price);
		}
	}
})