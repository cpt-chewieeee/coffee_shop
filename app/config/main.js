var React = require('react');
var Header = require('../components/header/header-main');


var Api = require('../actions/api-calls');
module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Header user={this.state.user} login={this.login} cartCount={this.state.cartCount}/>
				<div className="container-fluid">
					{
						React.Children.map(this.props.children, function(child){
							return React.cloneElement(child, {user: this.state.user, products: this.state.products, addProduct: this.addProduct, cart: this.state.cart});
						}, this)
					}
				</div>
			</div>
		)
	},
	getInitialState: function() {
		return {
			user: null,
			products: {},
			cart: [],
			cartCount: 0
		}
	},
	componentDidMount: function(){
		Api.getAll(this.getAllCallBack);
	},
	getAllCallBack: function(data, error){
		if(error){
			console.log('main.js getAll error', error);
		} else {
			this.setState({
				products: data.products
			});
		}
	},
	login: function(username, password, toggleModal){
		Api.login(username, password, this.loginCallBack, toggleModal);
	},
	loginCallBack: function(data, error, toggleModal){
		if(error){ 
			console.log("main.js login error", error);
		} else {
			toggleModal();
			this.updateUser(data);
		}
	},
	updateUser: function(data){
		this.setState({
			user: data.user
		})
	},
	addProduct: function(id, price){
		var cart = this.state.cart;
		cart.push({id: id, price: price});
		this.setState({
			cartCount: this.state.cartCount + 1,
			cart: cart
		});
	}
})