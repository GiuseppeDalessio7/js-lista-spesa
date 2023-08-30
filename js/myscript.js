/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */


let listShop = ['Pomodoro', 'Cipolla' , 'Aglio', 'Acqua' , 'Vino', 'Verdure']
const ulEl = document.querySelector('ul')

let i = 0
// let printList

// listShop[0]
// listShop[1]
// listShop[2]
// listShop[3]
// listShop[4]
// listShop[5]

while (i < listShop.length ) {
    i++
    const printList = listShop[i - 1]
    console.log(printList);
    const markup = document.getElementById("lista"). innerHTML = `<li>${printList}</li>`

    ulEl.innerHTML += markup
    
}
