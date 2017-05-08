console.log("make_cards.js")

		var winterItems = document.getElementById("winterItems")
		var autumnItems = document.getElementById("autumnItems")
		var springItems = document.getElementById("springItems")

var bigBox = (function(orgbigBox){
	orgbigBox.makeCards = function(product){
		var products =[];
		var productCard;
		products = product.products;
		// if (){
		for (var i = 0; i < product.products.length; i++){
			if (products[i].category_id === 1){
				winterItems.innerHTML += `<li id="${products[i].category_id}${products[i].id}">
								<h5 class="name">${products[i].name}</h5>
								<h5 class="price">${products[i].price}</h5>
							</li>`
			}
			else if (products[i].category_id === 2){
				autumnItems.innerHTML += `<li id="${products[i].category_id}${products[i].id}">
								<h5 class="name">${products[i].name}</h5>
								<h5 class="price">${products[i].price}</h5>
							</li>`
			}
			else if (products[i].category_id === 3){
				springItems.innerHTML += `<li id="${products[i].category_id}${products[i].id}">
								<h5 class="name">${products[i].name}</h5>
								<h5 class="price">${products[i].price}</h5>
							</li>`
			}
		}
	}
	return orgbigBox
}(bigBox || {}));

bigBox.loadProducts(bigBox.makeCards)
				
