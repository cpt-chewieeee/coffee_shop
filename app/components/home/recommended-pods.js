var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');
var Pod = require('./pod-item');
module.exports = React.createClass({
	render: function(){
		if(this.state.selectedType === null) return null;
		var all_pods = [];
		for(var key in this.state.selectedPods.flavors){
			all_pods.push(<Pod flavor={key} key={key} packs={this.state.selectedPods.flavors[key]} user={this.props.user} addPod={this.props.addPod}/>);
		}
		return (
			<Panel header={'Recommended Pods'}>
				<div>
					{all_pods}
				</div>
			</Panel>
		)
	},
	getInitialState: function() {
		return {
			selectedType: null,
			selectedPods: {}
		}
	},
	componentDidMount: function(){
		this.setState({
			selectedType: this.props.selectedType
		})
	},
	componentWillReceiveProps: function(nextProps){
		if(this.state.selectedType !== nextProps.selectedType){
			var selectedPods = this.generatePods(nextProps.selectedType, nextProps.pods);
			this.setState({
				selectedType: nextProps.selectedType,
				selectedPods: selectedPods
			})
		}
	},
	generatePods: function(type, pods){
		var selectedPods;
		switch(type){
			case 'large':
				selectedPods = pods.COFFEE_POD_LARGE
				break;
			case 'small':
				selectedPods = pods.COFFEE_POD_SMALL
				break;
			case 'espresso':
			default: 
				selectedPods = pods.ESPRESSO_POD
				break;
		}
		return selectedPods;
	}
})