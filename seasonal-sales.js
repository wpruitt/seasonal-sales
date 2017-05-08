console.log("seasonal-sales.js")


var products = [];
var discounts = [];

var bigBox = (function(orgbigBox){
	orgbigBox.loadProducts = function(callbackFunction){
		loadProducts = new XMLHttpRequest();
		loadProducts.addEventListener("load", function(){
			products = JSON.parse(this.responseText);
			console.log(products)
			callbackFunction(products)
		});
		loadProducts.open("GET", "products.json")
		loadProducts.send()
	return products
	}

	orgbigBox.loadDiscounts = function(callbackFunction){
		loadDiscounts = new XMLHttpRequest();
		loadDiscounts.addEventListener("load", function(){
			discounts = JSON.parse(this.responseText);
			console.log("passingi in discounts", discounts)
			callbackFunction(discounts)
		});
		loadDiscounts.open("GET", "categories.json")
		loadDiscounts.send()
	return discounts
	}
	return orgbigBox
}(bigBox || {}))


var selectSeason = document.getElementById("selector")
var season = document.getElementById("selector").value
selectSeason.onchange = function (){
	selectSeason = document.getElementById("selector")
	season = document.getElementById("selector").value
	bigBox.clearAndReload()
	bigBox.loadDiscounts(bigBox.applyDiscounts);
} 