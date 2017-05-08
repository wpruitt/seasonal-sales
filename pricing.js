console.log("pricing.js")

var bigBox = (function(orgbigBox){
	orgbigBox.applyDiscounts = function(discounts){
		products.products.forEach(function(product){
			if (product.category_id == (parseInt(season) + 1)){
				var count = 0
				console.log(product.category_id)
				document.getElementById(`${product.category_id}${product.id}`).getElementsByClassName("price")[count].innerHTML = (product.price - (product.price * discounts.categories[season].discount)).toFixed(2)
				console.log("hey")
				count ++
			}
		})
	}
	return orgbigBox
}(bigBox || {}))

