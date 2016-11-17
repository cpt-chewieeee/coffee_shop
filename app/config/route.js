var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('./main');
var Home = require('../components/home/home-main');
var ItemMain = require('../components/item/item-main');
var CartMain = require('../components/cart/cart-main');
module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="item/:itemId" component={ItemMain} />
			<Route path="cart" component={CartMain} />
		</Route>
	</Router>
)