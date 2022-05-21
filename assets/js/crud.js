import { printProducts } from "./ui.js";

const baseURL = 'https://e-commerce-api-academlo.herokuapp.com/api';
let editingID = null; //Guarda el ID obtenido en edit para hacerle update


function getProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then( (response) => {
            //console.log('Funciona');
            //console.log(response);
            const products = response.data;
            //console.log(products);
            printProducts(products);
        }).catch( (error) => {
            console.log('No funciona');
            console.log(error);
        });
}

function addToCart(id) {
    let getProductQty = localStorage.getItem(`${id}`);
    if(getProductQty === null || getProductQty === "0") {
        console.log(getProductQty);
        localStorage.setItem(`${id}`, "1");
    } else {
        getProductQty = localStorage.getItem(`${id}`);
        getProductQty = Number(getProductQty) + 1;
        localStorage.setItem(`${id}`, `${getProductQty}`);
    }
    console.log(getProductQty = localStorage.getItem(`${id}`));
}

/*
function addToCart() {
    let getProductQty = localStorage.getItem("products");
    if(getProductQty === null) {
        localStorage.setItem("products", "1");
    } else {
        getProductQty = localStorage.getItem("products");
        getProductQty = Number(getProductQty) + 1;
        localStorage.setItem("products", `${getProductQty}`);
    }
    console.log(getProductQty = localStorage.getItem("products"));
}*/

export { getProducts, addToCart }