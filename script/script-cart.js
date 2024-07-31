
var products = [
    {
        id: "denty-1",
        name: "Denty-01",
        price: 40.00,
        image: "images/denty1.jpg"
    },
    {
        id: "denty-2",
        name: "Denty-02",
        price: 70.00,
        image: "images/denty2.jpg"
    },
    {
        id: "denty-3",
        name: "Denty-03",
        price: 50.00,
        image: "images/denty3.jpg"
    },
    {
        id: "denty-4",
        name: "Denty-04",
        price: 30.00,
        image: "images/denty4.jpg"
    },
    {
        id: "denty-5",
        name: "Denty-05",
        price: 40.00,
        image: "images/denty5.jpg"
    },
    {
        id: "gowild-1",
        name: "GoWild-01",
        price: 40.00,
        image: "images/Gowild1.jpg"
    },
    {
        id: "gowild-2",
        name: "GoWild-02",
        price: 70.00,
        image: "images/gowild2.jpg"
    },
    {
        id: "gowild-3",
        name: "GoWild-03",
        price: 50.00,
        image: "images/gowild3.jpg"
    },
    {
        id: "gowild-4",
        name: "GoWild-04",
        price: 30.00,
        image: "images/gowild4.jpg"
    },
    {
        id: "gowild-5",
        name: "GoWild-05",
        price: 40.00,
        image: "images/Gowild5.jpg"
    },
    {
        id: "chokers-1",
        name: "Chokers-01",
        price: 40.00,
        image: "images/choker1.jpg"
    },
    {
        id: "chokers-2",
        name: "Chokers-02",
        price: 70.00,
        image: "images/choker2.jpg"
    },
    {
        id: "chokers-3",
        name: "Chokers-03",
        price: 50.00,
        image: "images/choker3.jpg"
    },
    {
        
        id: "chokers-4",
        name: "Chokers-04",
        price: 30.00,
        image: "images/choker4.jpg"
    },
    {
        id: "chokers-5",
        name: "Chokers-05",
        price: 40.00,
        image: "images/choker5.jpg"
    },

]

//get the id's list of the selected products
var productList = JSON.parse(localStorage.getItem('productList'));
console.log(productList);

//function to display table of the selected products
function displayCart(productList) {
    // debugger;
    console.log(productList);
    console.log(products);

    var cartBody = document.getElementById('cart-body');

    for (i = 0; i < productList.length; i++) {
        for (j = 0; j < products.length; j++) {
            if (productList[i] == products[j].id) {
                var productPrice = products[j].price;
                var quantity = 1;
                var amount = quantity * productPrice;

                var row = document.createElement('tr');
                row.innerHTML = `
                                <td><img src="${products[j].image}"></td>
                                <td>${products[j].name}</td>
                                <td id="price">${products[j].price}</td>    
                                <td>
                                    <select id="select-quantity">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>  
                                <td class="amount-cell">${amount}</td> 
                                <td ><button ><i id="delete-btn" class="fa-regular fa-trash-can"></i></button></td>     
                                `;

                cartBody.appendChild(row);
            }
        }
    }
    console.log(cartBody);
    var sumAmount = totalPayment();
    var rowSum = document.createElement('tr');
    rowSum.innerHTML = `
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total: </td>
                        <td id="sumAmount" style="color:green; text-decoration: underline"><b>${sumAmount}</b></td>
                        `;
    cartBody.appendChild(rowSum);
    
}

displayCart(productList);

// debugger;
// var cartTable = document.querySelector('.cart-table');
// document.getElementById('cart-body').addEventListener('change', function (event) {
//     if(event.target.id == "select-quantity"){
//         var row = event.target.closest('tr');
//         console.log(row);
//         updateAmount(row);
//     }
// });

document.getElementById('cart-body').addEventListener('change', targetRow);

function targetRow(event){
    if(event.target.id == "select-quantity"){
        var row = event.target.closest('tr');
        var newAmount = updateAmount(row);
        row.querySelector('.amount-cell').textContent = newAmount;
    }

    document.querySelector('#sumAmount').textContent = totalPayment();
}

function updateAmount(row){
    var price = parseInt(row.querySelector("#price").textContent);
    var newQuantity = row.querySelector("#select-quantity").value;
    var newAmount = price * newQuantity;
    // console.log(price);
    // console.log(newQuantity);
    // console.log(newAmount);
    return newAmount;
}

function totalPayment(){
    
    var cartBody = document.getElementById('cart-body');
    var productAmount = cartBody.querySelectorAll('.amount-cell')
    var sum = 0;
    
    for(i=0; i < productAmount.length; i++){
        var amount = parseInt(productAmount[i].textContent);
        sum += amount;
    }
    console.log(sum)
    return sum;
    // productAmount.forEach(function(amountCell){
    //     var amount = parseFloat(amountCell.textContent);
    //     if(!isNaN(amount)){
    //         sum += amount;
    //     }
    // })
    // productAmount.forEach(total)
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('cart-body').addEventListener('click', targetRowDelete);
})


function targetRowDelete(event){
    console.log(event.target.id == 'delete-btn')
    if(event.target.id == "delete-btn"){
        var row = event.target.closest('tr');
        console.log(row)
        row.remove();
    }
    document.querySelector('#sumAmount').textContent = totalPayment();
    console.log("clicked")
}


function checkOut(){
    var totalPayment = document.querySelector('#sumAmount').textContent;
    var items = document.querySelectorAll('.amount-cell').length;
    console.log(totalPayment)
    console.log(items)
    alert(`Your total payment for ${items} items is $${totalPayment}. \n\nWe will arrange the shipment at our soonest. \nThank you !!! `)
    
    console.log(productList)
       
    localStorage.removeItem('productList');
    window.location.href = "products.html";
    
    
}






