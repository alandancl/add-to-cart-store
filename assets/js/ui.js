function printProducts(arrProducts) {
    //Identificar contenedor donde mostraremos los products
    const container = document.getElementById('products-container');
    //Generar el html
    let html = '';
    for (let i = 0; i < arrProducts.length; i++) {
        html += `<div class="car-product col-sm-6 col-lg-3 p-3">
                    <div class="product-img-container">
                        <img src="${ arrProducts[i].image }" alt="" class="product-img">
                    </div>
                    <div class="card-body p-3">
                        <h6 class="product-name text-center">${ arrProducts[i].name }</h6>
                        <h5 class="product-price">${ arrProducts[i].price }</h5>
                        <div class="add-to-cart-container">
                            <i class="fa-solid fa-cart-circle-plus"></i>
                            <button onclick="addToCart(${arrProducts[i].id})" class="add-to-cart btn btn-primary">
                                <i class="fa-solid fa-cart-plus"></i> Add to cart
                            </button>
                        </div>
                    </div>
                </div>`;
    }
    container.innerHTML = html;
}

export { printProducts }

        