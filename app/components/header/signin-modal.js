var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var ModalHeader = require('react-bootstrap/lib/ModalHeader');
var ModalTitle = require('react-bootstrap/lib/ModalTitle');
var ModalBody = require('react-bootstrap/lib/ModalBody');

// var Api = require('../../actions/api-calls-profile');
module.exports = React.createClass({
	render: function(){
		return (
			<Modal show={this.props.show} onHide={this.props.close}>
				<ModalHeader closeButton>
					<ModalTitle>Sign In</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<form className="form-horizontal">
						<div className="form-group">
							<label className="col-xs-2 col-sm-2 col-md-2 col-lg-2 control-label">Username</label>
							<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
								<input type="text" className="form-control" placeholder="username" value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
							</div>
						</div>
						<div className="form-group">
							<label className="col-xs-2 col-sm-2 col-md-2 col-lg-2 control-label">Password</label>
							<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
								<input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
							</div>
						</div>
						<div className="form-group sign-in-btns">
							<div className="col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-xs-10 col-sm-10 col-md-10 col-lg-10">
								<button type="submit" onClick={this.props.close} className="btn btn-default pull-right">Cancel</button>
								<button type="button" onClick={this.login} className="btn btn-default btn-primary pull-right">Sign In</button>
							</div>
						</div>
					</form>
				</ModalBody>
			</Modal>
		)
	},
	getInitialState: function(){
		return {
			username: '',
			password: ''
		}
	},
	handleChange: function(type, event){
		if(type === 'username'){
			this.setState({username: event.target.value});
		} else {
			this.setState({password: event.target.value});
		}
	},
	login: function(){
		this.props.login(this.state.username, this.state.password);
		// Api.login(this.state.username, this.state.password, this.successLogin, this.errorLogin);
	}
})