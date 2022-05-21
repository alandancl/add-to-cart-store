function getCartProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then( (response) => {
            //console.log('Funciona');
            //console.log(response);
            const products = response.data;
            //console.log(products);
            printCartProducts(products);
        }).catch( (error) => {
            console.log('No funciona getCartProducts');
            console.log(error);
        });
}

function printCartProducts(arrProducts) {
    let container = document.getElementById('products-cart-container');
    let html = '';
    for (let i = 0; i < arrProducts.length; i++) {
        //Checamos si de los productos que devuelve la api tenemos alguno agregado en el carrito, la cantidad debe ser diferente de null o cero
        if (localStorage.getItem(`${arrProducts[i].id}`) !== null && localStorage.getItem(`${arrProducts[i].id}`) !== "0") {
            console.log(localStorage.getItem(`${arrProducts[i].id}`));
            let getProductQty = localStorage.getItem(`${arrProducts[i].id}`);
            html += `<div class="cart-product">
                        <div class="product-img-cart col-sm-1">
                            <img src="${ arrProducts[i].image }" alt="" class="product-img">
                        </div>
                        <div class="product-name-cart col-sm-3">
                            <p class="text-center">${ arrProducts[i].name }</p>
                        </div>
                        <div id="product-qty" class=" col-sm-3">
                            <p class="text-center">Qty. ${getProductQty}</p>
                        </div>
                        <div class="product-price-cart col-sm-3">
                            <span><p class="product-price text-center">$${ arrProducts[i].price }</p></span>
                        </div>
                        <button class="btn btn-danger col-sm-2" onclick="deleteCartProduct(${arrProducts[i].id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>`;
        }
    }
    container.innerHTML = html;
} 

function deleteCartProduct(id) {
    const confirmation = confirm('¿Estás seguro de eliminar el producto del carrito?');
    if(!confirmation){
        return ;
    }
    console.log(id);
    localStorage.setItem(`${id}`, "0");
    getCartProducts();
}

getCartProducts();


