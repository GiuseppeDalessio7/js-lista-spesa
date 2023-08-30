/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */


let listShop = ['Pomodoro', 'Cipolla' , 'Aglio', 'Acqua' , 'Vino', 'Verdure']
const ulEl = document.querySelector('ul')

let i = 0
// let printList


while (i < listShop.length ) {
    i++
    const printList = listShop[i - 1]
    // console.log(printList);
    const markup = (`<li>${printList}</li>`)
    console.log(markup);
    ulEl.innerHTML += markup
    
}
