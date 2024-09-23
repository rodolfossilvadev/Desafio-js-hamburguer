const list = document.querySelector('ul')
const buttonFor = document.querySelector('.button-foreach')
const buttonMap = document.querySelector('.button-map')
const buttonReduce = document.querySelector('.sum-all')
const buttonFilter = document.querySelector('.filter-all')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br',
        {style: 'currency',
         currency: 'BRL'
        })
    return newValue
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach(product => {
        myLi += `
    <li>
         <img src= ${product.src}>
         <p>${product.name}</p>
         <p class="item-price"> ${formatCurrency(product.price)}</p>
    </li>
        
    `

    })
    list.innerHTML = myLi
}

function mapDescont() {
    const newPrice = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,
    }))
    //Spread Operator (...)
    showAll(newPrice)
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
        <li>
           <p>O valor total dos produtos: ${formatCurrency(totalValue)}</p> 
           </li>
           
    `

}
function veganBurguer(){
    const filterVegan = menuOptions.filter(products => products.vegan)
    showAll(filterVegan)
}


buttonFor.addEventListener('click', () => showAll(menuOptions))
buttonMap.addEventListener('click', mapDescont)
buttonReduce.addEventListener('click', sumAllItens)
buttonFilter.addEventListener('click', veganBurguer)