var React = require('react');
var ReactDOM = require('react-dom');
// var CSSTransitionGroup = require('react-addons-css-transition-group');

//ROUTER STUFF:
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
// var Navigation = ReactRouter.Navigation;
// var History = ReactRouter.History;
// var createBrowserHistory = require('history/lib/createBrowserHistory');

// REQUIRE JS ABOVE
var h = require('./helpers'); //.js not necessary with commonJS

// FIREBASE:
// var Rebase = require('re-base');
// var base = Rebase.createClass('https://react-catch-of-day.firebaseio.com/');

// var Catalyst = require('react-catalyst');


//IMPORT COMPONENTS:
import NotFound from './components/NotFound';

/*
	App
*/
var App = React.createClass({

	//runs automatically
	getInitialState: function() {

	},

	componentDidMount: function() {
		//local storage stuff
	},

	componentWillUpdate(nextProps,nextState) {
		//local storage stuff
	},
	render: function(){
		return(
			<div className="the-app">
				<Header />
				<Component />
			</div>
		)
	}
});


var Header = React.createClass({
	render: function() {
		return(
			<header className="top" >
				<h1>Title</h1>
				<h3 className="slogan"><span>{this.props.slogan}</span></h3>
			</header>
		)
	},
	propTypes: {
		slogan: React.PropTypes.string.isRequired
	}
});

var Component = React.createClass({
	render: function() {
		return(
			<div className="comp-wrap">
				<h2 className="comp-ex">Example Component</h2>
			</div>
		)
	}
});

/*
	Routes
*/
var routes = (
	<Router history={createBrowserHistory()}>
		<Route path='/' component={Component}/>
		<Route path='/app/:appId' component={App}/>
		<Route path='*' component={NotFound}/>
	</Router>
)


ReactDOM.render(routes, document.querySelector('#main'));