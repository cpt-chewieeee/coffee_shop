var React = require('react');
var EditFormat = require('../../actions/edit-format');
module.exports = React.createClass({
	render: function(){
		var imgSrc = '/img/coffee_pods/' + this.props.flavor + '.png';
		// console.log(this.props);
		return (
			<div className="list-item-card">
				
				<div>
					<p className="text-center"><img src={imgSrc} /></p>
					<p className="text-center"><strong>{EditFormat.flavor(this.props.flavor)}</strong></p>
					<p className="text-right">{(this.state.selectedPrice ? this.state.selectedPrice : '')}</p>
					<p>
						<select className="form-control" value={this.state.selectedPodId} onChange={this.handlePodChange}>
							{
								this.props.packs.map(function(pack, index){
									return (<option key={index} value={pack.id}>{pack.id}: {pack.name}</option>)
								})
							}
						</select>
					</p>
					<p className="text-right">{(this.props.user ? <button className="btn btn-primary btn-xs" onClick={this.addPod}><i className="fa fa-plus"></i></button> : '')}</p>
				</div>

			</div>
		)
	},
	getInitialState: function(){
		return {
			selectedPodId: 0,
			selectedPrice: null
		}
	},
	handlePodChange: function(e){
		var price = this.getPrice(e.target.value);
		this.setState({selectedPodId: e.target.value, selectedPrice: price});
	},
	getPrice: function(id){
		var price = 0;
		for(var i = 0; i < this.props.packs.length; ++i){
			if(this.props.packs[i].id == id){
				price = this.props.packs[i].price;
				break;
			}
		}
		return price;
	},
	componentDidMount: function() {
		// console.log('pi', this.props.packs[0].price);
		if(this.props.packs.length > 0){
			this.setState({
				selectedPrice: this.props.packs[0].price,
				selectedPodId: this.props.packs[0].id
			})
		}
	},
	componentWillReceiveProps: function(nextProps) {
		if(this.props.packs != nextProps.packs && nextProps.packs.length > 0){
			this.setState({
				selectedPrice: nextProps.packs[0].price,
				selectedPodId: nextProps.packs[0].id
			})
		}
	},
	addPod: function(id){
		if(this.props.addPod){
			this.props.addPod(this.state.selectedPodId, this.state.selectedPrice);
		}
	}
})