module.exports = function(){
	return {
		get_products: function(req, res){
			var sku_list = {
				coffee_machines: { 
					large: [
						{type: {product_type: 'COFFEE_MACHINE_SMALL', water_line_compatible: false}, model: 'base', id: 'CM001', name: 'Small Coffee [base model]', price: '$49.99'},
						{type: {product_type: 'COFFEE_MACHINE_SMALL', water_line_compatible: false}, model: 'premium', id: 'CM002', name: 'Small Coffee [premium model]', price: '$99.99'},
						{type: {product_type: 'COFFEE_MACHINE_SMALL', water_line_compatible: true}, model: 'deluxe', id: 'CM003', name: 'Small Coffee [deluxe model]', price: '$149.99'}
					],
					small: [
						{type: {product_type: 'COFFEE_MACHINE_LARGE', water_line_compatible: false}, model: 'base', id: 'CM101', name: 'Large Coffee [base model]', price: '$59.99'},
						{type: {product_type: 'COFFEE_MACHINE_LARGE', water_line_compatible: true}, model: 'premium', id: 'CM102', name: 'Large Coffee [premium model]', price: '$129.99'},
						{type: {product_type: 'COFFEE_MACHINE_LARGE', water_line_compatible: true}, model: 'deluxe', id: 'CM103', name: 'Large Coffee [deluxe model]', price: '$249.99'}
					],
					espresso: [
						{type: {product_type: 'ESPRESSO_MACHINE', water_line_compatible: false}, model: 'base', id: 'EM001', name: 'Espresso machine [base model]', price: '$79.99'},
						{type: {product_type: 'ESPRESSO_MACHINE', water_line_compatible: false}, model: 'premium', id: 'EM002', name: 'Espresso machine [premium model]', price: '$149.99'},
						{type: {product_type: 'ESPRESSO_MACHINE', water_line_compatible: true}, model: 'base', id: 'EM003', name: 'Espresso machine [base model]', price: '$349.99'}
					]
				},
				coffee_pods: {
					small: [
						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: '1 dozen (12)', id: 'CP001', name: 'Vanilla Small (1 dozen)', price: '$2.99'},
						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: '3 dozen (36)', id: 'CP003', name: 'Vanilla Small (3 dozen)', price: '$4.99'},

						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: '1 dozen (12)', id: 'CP011', name: 'Caramel Small (1 dozen)', price: '$2.99'},
						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: '3 dozen (12)', id: 'CP013', name: 'Caramel Small (3 dozen)', price: '$4.99'},

						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: '1 dozen (12)', id: 'CP021', name: 'PSL Small (1 dozen)', price: '$2.99'},
						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: '3 dozen (12)', id: 'CP023', name: 'PSL Small (3 dozen)', price: '$4.99'},

						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: '1 dozen (12)', id: 'CP031', name: 'Mocha Small (1 dozen)', price: '$2.99'},
						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: '3 dozen (12)', id: 'CP033', name: 'Mocha Small (3 dozen)', price: '$4.99'},

						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: '1 dozen (12)', id: 'CP041', name: 'Hazelnut Small (1 dozen)', price: '$2.99'},
						{product_type: 'COFFEE_POD_SMALL', coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: '3 dozen (12)', id: 'CP043', name: 'Hazelnut Small (3 dozen)', price: '$4.99'},
					],
					large: [
						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: '1 dozen (12)', id: 'CP101', name: 'Vanilla Large (1 dozen)', price: '$4.99'},
						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: '3 dozen (36)', id: 'CP103', name: 'Vanilla Large (3 dozen)', price: '$6.99'},

						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: '1 dozen (12)', id: 'CP111', name: 'Caramel Large (1 dozen)', price: '$4.99'},
						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: '3 dozen (12)', id: 'CP113', name: 'Caramel Large (3 dozen)', price: '$6.99'},

						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: '1 dozen (12)', id: 'CP121', name: 'PSL Large (1 dozen)', price: '$4.99'},
						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_PSL', pack_size: '3 dozen (12)', id: 'CP123', name: 'PSL Large (3 dozen)', price: '$6.99'},

						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: '1 dozen (12)', id: 'CP131', name: 'Mocha Large (1 dozen)', price: '$4.99'},
						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_MOCHA', pack_size: '3 dozen (12)', id: 'CP133', name: 'Mocha Large (3 dozen)', price: '$6.99'},

						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: '1 dozen (12)', id: 'CP141', name: 'Hazelnut Large (1 dozen)', price: '$4.99'},
						{product_type: 'COFFEE_POD_LARGE', coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT', pack_size: '3 dozen (12)', id: 'CP143', name: 'Hazelnut Large (3 dozen)', price: '$6.99'},				
					],
					espresso: [
						{product_type: 'ESPRESSO_POD', coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: '3 dozen (36)', id: 'EP003', name: 'Vanilla Espresso (3 dozen)', price: '$3.99'},
						{product_type: 'ESPRESSO_POD', coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: '5 dozen (60)', id: 'EP005', name: 'Vanilla Espresso (5 dozen)', price: '$5.99'},
						{product_type: 'ESPRESSO_POD', coffee_flavor: 'COFFEE_FLAVOR_VANILLA', pack_size: '7 dozen (84)', id: 'EP007', name: 'Vanilla Espresso (7 dozen)', price: '$7.99'},

						{product_type: 'ESPRESSO_POD', coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: '3 dozen (36)', id: 'EP013', name: 'Caramel Espresso (3 dozen)', price: '$3.99'},
						{product_type: 'ESPRESSO_POD', coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: '5 dozen (60)', id: 'EP015', name: 'Caramel Espresso (5 dozen)', price: '$5.99'},
						{product_type: 'ESPRESSO_POD', coffee_flavor: 'COFFEE_FLAVOR_CARAMEL', pack_size: '7 dozen (84)', id: 'EP017', name: 'Caramel Espresso (7 dozen)', price: '$7.99'},
					]
				},
			};
			res.json({
				success: true,
				message: 'Success',
				products: sku_list
			})
		}
	}
}