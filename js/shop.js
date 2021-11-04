const products = [
    { img: "1.jpg", productName: "Full goathland 3d kit", category: "Big Kit", price: 30 },
    { img: "2.jpg", productName: "Goathland Signal box ONLY", category: "Small Kit", price: 5 },
    { img: "3.jpg", productName: "Goathland footbridge ONLY", category: "Small Kit", price: 5 },
];


/**
 * function getRow used to return a tr with as many td needed for one product of array
 * @param {*} products 
 * @returns productsOut
 */
function getRow(products) {
    productsOut = `<tr>
                            <td><img class="shopImgTable" src="productImg/${products.img}"></td>
                            <td>${products.productName}</td>
                            <td>${products.category}</td>
                            <td>${products.price} €</td>
                            <td><button type="submit" class="btn btn-success"><svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                          </svg> Add to cart</button>
                        </tr>`;

    return productsOut
}

/**
 * This function will run through the whole product array and spit out an html table code then write inside the table with the right ID
 * @param {*} starList 
 */
function showTable(productsList) {

    let productsHTML = ""

    for (index in productsList) {

        productsHTML += getRow(productsList[index])

        $("#productList").html(productsHTML)

    }
}

$(document).ready(function () {
    //call function showTable to write everything needed to display the product page
    showTable(products)

})


