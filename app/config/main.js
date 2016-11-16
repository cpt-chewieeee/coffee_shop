var React = require('react');
var Header = require('../components/header/header-main');


var Api = require('../actions/api-calls');
module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Header user={this.state.user} login={this.login}/>
				<div className="container-fluid">
					{
						React.Children.map(this.props.children, function(child){
							return React.cloneElement(child, {user: this.state.user, products: this.state.products});
						}, this)
					}
				</div>
			</div>
		)
	},
	getInitialState: function() {
		return {
			user: null,
			products: null,
		}
	},
	componentDidMount: function(){
		
		Api.getAll(this.getAllCallBack);
		if(Object.keys(this.props.params).length > 0){
			this.filterItem(this.props.params.itemId);
		}
	},
	componentWillReceiveProps: function(nextProps, nextState) {
		// console.log('--->', nextProps.params.itemId);
		if(Object.keys(nextProps.params).length > 0)
			this.filterItem(nextProps.params.itemId);
	},
	filterItem: function(id){
		console.log('filterItem', id);
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
			user: data
		})
	}
})