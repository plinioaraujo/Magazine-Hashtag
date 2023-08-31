
import { produtos } from "./util"
import { addProductsCart } from "./cart-menu"
const containerProduto = document.querySelector("#container-produto")
const fragment = document.createDocumentFragment()

export const renderIntoPage = () => {
    produtos.forEach(({ id, nomeProduto, marca, preco, img }) => {
        const div = document.createElement('div')
        const imagemProduto = document.createElement('img')
        const marcaProduto = document.createElement('p')
        const nome = document.createElement('p')
        const precoProduto = document.createElement('p')
        const button = document.createElement('button')
        const iconCart = document.createElement('i')

        imagemProduto.setAttribute('src', `./assets/img/${img}.jpg`)
        imagemProduto.setAttribute('alt', `Produto ${id} do  Magazine Hashtag`)
        imagemProduto.setAttribute('class', 'group-hover:scale-110 duration-300 rounded-lg ')

        marcaProduto.setAttribute('class', 'text-sm')
        marcaProduto.textContent = `${marca}`

        nome.setAttribute('class', 'text-sm')
        nome.textContent = `${nomeProduto}`

        precoProduto.setAttribute('class', 'text-sm')
        precoProduto.textContent = `$${preco}`
        
        iconCart.setAttribute('class','fa-solid fa-cart-plus')
        iconCart.setAttribute('data-js',`${id}`)
        button.setAttribute('class','bg-slate-950 hover:bg-slate-700 text-slate-200')
        button.setAttribute('data-js',`${id}`)
        button.append(iconCart)


        div.setAttribute('id', `card-produto-${id}`)
        div.setAttribute('class', `card-produto border-solid shadow-lg shadow-slate-400 rounded-lg w-48 m-2 flex flex-col p-2 justify-content-between group`)

        div.append(imagemProduto, marcaProduto, nome, precoProduto, button)

        fragment.append(div)
    })

    containerProduto.setAttribute('class', 'flex flex-wrap gap-2')
    containerProduto.append(fragment)

}

containerProduto.addEventListener('click', event =>{
  const clickedElement = event.target

    if (clickedElement.tagName === 'BUTTON' || clickedElement.tagName === 'I') {
        const idProduto = clickedElement.getAttribute('data-js')
        addProductsCart(idProduto)
    }
})