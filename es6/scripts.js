/*

//                                  1 - var, let e const 🌸


//var
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)


//let

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)


//const

function logName(){
    const name = "Leticia"
    console.log(name)
}

const name = "Gabriella"

logName()



//                                      2 - Arrow Function 🌸


//Exemplo: 1

const sum = function sum(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5,5))


//Exemplo: 2

const greeting = (name) => {
    if(name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(greeting("Leticia"))
console.log(greeting())


//Exemplo: 3

const testeArrow = () => console.log ("testou!")

testeArrow()

//Exemplo: 4

const  user = {
    name: "Luca",
    sayUserName() {
        var self = this
       setTimeout(function() {
        console.log(self)
        console.log("Username: " + self.name)
       }, 500) 
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }
}

//user.sayUserName()
//user.sayUserNameArrow()



//                                      3 - Filter  🌸


//Exemplo 1:

const arr = [1, 2 , 3 , 4 , 5]

console.log(arr)  // array original, não modificado.

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)


//Exemplo 2:

const users = [
    {name: "Cassilda", available: true},
    {name: "Marla", available: false},
    {name: "Perla", available: true},
    {name: "Olga", available: false},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)


*/

//                                      4 - Map  🌸

/*
const products = [
    {name: 'Camisa', price: 79.99, category: 'Roupas'},
    {name: 'Airfriyer', price: 299.99, category: 'Eletro'},
    {name: 'Forno', price: 400, category: 'Eletro'},
    {name: 'Calça', price: 99.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products)

*/

//                                      5 - Template Literals  🌸




/*

const userName = "Janja"
const age = 54

console.log(`O nome do usuário é ${userName} e ela tem ${age} anos.`)


*/




//                                      6 - Destructuring  🌸


/*
const fruits = ["Maça", "Laranja", "Banana"]


const [f1, f2, f3] = fruits

console.log(f1)
console.log(f3)
console.log(f2)

*/


//                                      7 - Spread Oerator  🌸



/* 

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]

console.log(a3)


const carName = { name: 'Gol'}
const carBrand = { brand: 'VW'}
const otherInfos = { km: 100000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)


*/


//                                      8 - Classes  🌸


/*

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * (( 100 - discount) / 100)
    }
}

const shirt = new Product ('Camiseta', 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))


*/


//                                      9 - Herança  🌸

/*

class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name, price)
        this.colors=colors
    }

    showColors(){
        console.log('As cores sao:')
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, [
    'Preto',
    'Azul',
    'Verde',
])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

console.log(hat.showColors())

*/