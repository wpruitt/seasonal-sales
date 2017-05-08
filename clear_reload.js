console.log("clear_reload.js")

var bigBox = (function(orgbigBox){
	orgbigBox.clearAndReload = function(){
		winterItems.innerHTML = ""
		autumnItems.innerHTML = ""
		springItems.innerHTML = ""
		bigBox.loadProducts(bigBox.makeCards)
	}
	return orgbigBox
}(bigBox || {}))