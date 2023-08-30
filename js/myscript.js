/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */


let listShop = ['Pomodoro', 'Cipolla' , 'Aglio', 'Acqua' , 'Vino', 'Verdure']
console.log(listShop);

let i = 0
let printList

// listShop[0]
// listShop[1]
// listShop[2]
// listShop[3]
// listShop[4]
// listShop[5]

while (i < 5 ) {
    i++
    let printList = document.getElementById("lista") .innerHTML = ("La lista è : " + listShop)
} if (i === 0) {
    alert('ho sbagliato')

    console.log(printList);
}
