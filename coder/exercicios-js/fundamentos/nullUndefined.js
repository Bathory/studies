let valor //nao inicializada/definida
console.log(valor)

valor = null // ausencia de valor, vazio
console.log(valor)
//console.log(valor.toString()) /Erro: Cannot read properties of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)