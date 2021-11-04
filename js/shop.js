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

    showTable(products)

})


