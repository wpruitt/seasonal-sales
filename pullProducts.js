console.log("pullProducts.js")

var bigBox = (function(){

	orgbigBox.loadProducts = function(){
		loadProd = new XMLHttpRequest();
		loadProd.addEventyListener("load", function(){
			prods = JSON.parse(this.responseText);
			console.log(prods);
		});
		loadProd.open("GET", "products.json");
		loapProd.send();
	} 
	return 
}(bigBox || {}));