module.exports = {
	flavor: function(type){
		switch(type){
			case 'COFFEE_FLAVOR_VANILLA':
				return 'Vanilla';
			case 'COFFEE_FLAVOR_PSL':
				return 'Pumpkin Spice Latte';
			case 'COFFEE_FLAVOR_MOCHA':
				return 'Mocha';
			case 'COFFEE_FLAVOR_HAZELNUT':
				return 'Hazelnut';
			case 'COFFEE_FLAVOR_CARAMEL':
				return 'Caramel';
			default:
				return;
		}
	}
};