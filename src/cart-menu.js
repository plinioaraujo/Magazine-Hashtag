import { produtos } from "./util"

const openShoppingCart = () => {
    document.querySelector('#cart-shopping').classList.add('right-[0px]')
    document.querySelector('#cart-shopping').classList.remove('right-[-360px]')
}
const closeShoppingCart = () => {
    document.querySelector('#cart-shopping').classList.remove('right-[0px]')
    document.querySelector('#cart-shopping').classList.add('right-[-360px]')
}

export const initCartShopping = () => {
    const btnCloseCart = document.querySelector('#cart-close')
    const btnOpenCart = document.querySelector('#cart-open')

    btnCloseCart.addEventListener('click', closeShoppingCart)
    btnOpenCart.addEventListener('click', openShoppingCart)
   
}

export const addProductsCart = idProduto =>{
    const produtosCarrinho = []
    const productId = produtos.find(product => product.id === parseInt(idProduto))

    produtosCarrinho.push(productId)

    console.log(produtosCarrinho)

    const cartProducts = document.querySelector("#cart-products")
    const cardCartProduct = `
    <article class="flex bg-slate-100 rounded-lg relative">
    <button id="cart-close"><i class="fa-solid fa-circle-xmark text-slate-700 absolute top-1 right-2 hover:text-red-800"></i></button>
    <img src="./assets/img/product-${productId.id}.jpg" alt="Carrinho: Casaco Branco" class="h-24 rounded-lg p-1">
    <div class="py-2">
      <p class="text-slate-900 text-sm">${productId.nomeProduto}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${productId.preco}</p>
    </div>
  </article>`

  cartProducts.innerHTML += cardCartProduct
}