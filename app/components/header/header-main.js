var React = require('react');
var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavbarHeader = require('react-bootstrap/lib/NavbarHeader');
var NavbarBrand = require('react-bootstrap/lib/NavbarBrand');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

var SignInModal = require('./signin-modal');
module.exports = React.createClass({
	render: function(){
		var signComp = 	(<Nav pullRight>
							<NavItem eventKey={1} onClick={this.toggleModal}>Sign In</NavItem>
						</Nav>)
		var profileComp = (<Nav pullRight>
							<NavItem eventKey={1}><i className="fa fa-shopping-cart"><span className="badge header-badge">0</span></i></NavItem>
							<NavItem eventKey={2}>Settings</NavItem>
						</Nav>)
		return (
			<div>
				<Navbar>
					<NavbarHeader>
						<NavbarBrand>
							<a href='#'>Coffee shop</a>
						</NavbarBrand>
					</NavbarHeader>

					{(this.props.user === null ? signComp : profileComp)}
					<SignInModal show={this.state.showModal} close={this.toggleModal} login={this.login}/>
					
				</Navbar>
			</div>
		)
	},
	getInitialState: function(){
		return {
			showModal: false
		}
	},
	toggleModal: function(){
		this.setState({
			showModal: !this.state.showModal
		})
	},
	login: function(username, password){
		this.props.login(username, password, this.toggleModal);
	}
})