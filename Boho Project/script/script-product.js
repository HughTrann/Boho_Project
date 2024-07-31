

var productList = [];

function select(){
    productList = [];
    var selectedProduct = document.querySelectorAll('input[name="product"]:checked');
    
    function addValueToArray(check){
        productList.push(check.value);
    }
    selectedProduct.forEach(addValueToArray)
    console.log(productList)
    
    localStorage.setItem('productList', JSON.stringify(productList));

}

