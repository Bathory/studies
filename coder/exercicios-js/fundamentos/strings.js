const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//asci
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))//concatenar
console.log('Escola ' + escola + "!")//somar
console.log(escola.replace(3, 'e'))//substitui

console.log('Ana,Maria,Pedro'.split(','))//array com split: separador
console.log("Leticia,Luca".split(","))