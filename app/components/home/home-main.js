var React = require('react');
var ReactStack = require('react-stack');
var Horizontal = ReactStack.Horizontal;
var Vertical = ReactStack.Vertical;

var ProductList = require('./product-list');
var RecommendedPods = require('./recommended-pods');
module.exports = React.createClass({
	render: function(){
		if(!this.props.products) {
			return (<div>fetching data. loading...</div>)
		}
		// console.log(this.props.products);
		return (
			<div className="container-fluid">
				<ProductList products={this.state.machines} selectCoffee={this.selectCoffee} user={this.props.user} selectedId={this.state.selectedId}/>
				<br />
				<RecommendedPods pods={this.state.pods} selectedType={this.state.selectedType} />
			</div>
		)
	},
	getInitialState: function() {
		return {
			machines: {},
			pods: {},
			selectedId: null,
			selectedType: null
		}
	},
	selectCoffee: function(info){
		// console.log('selectCoffee', info);
		this.setState({
			selectedType: info.type,
			selectedId: info.id
		})
	},
	componentDidMount: function() {
		if(this.props.products){
			this.setState({
				machines: this.props.products.coffee_machines,
				pods: this.props.products.coffee_pods
			})
		}
	},
	componentWillReceiveProps: function(nextProps){
		if(Object.keys(nextProps.products).length > 0){
			this.setState({
				machines: nextProps.products.coffee_machines,
				pods: nextProps.products.coffee_pods
			})
		}
	}
})