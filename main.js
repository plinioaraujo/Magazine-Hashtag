import { renderIntoPage } from "./src/cart-products";
import { initCartShopping } from "./src/cart-menu";
import { addProductsCart } from "./src/cart-menu";

const init = () => {
   
    renderIntoPage()
    initCartShopping()
}


init()