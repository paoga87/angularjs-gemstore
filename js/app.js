(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;

	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 110.5,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			canPurchase: false,
			soldOut: false
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Just another gem...',
			canPurchase: false,
			soldOut: false
		}
	];

})();