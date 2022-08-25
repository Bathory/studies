/*
var number = 0;
while (number <=12){
    console.log(number);
    number = number +2;
}
*/

//do sempre executa as declaracoes pelo menos uma vez, inicia o teste pra ver se deve parar ou nao

/*
do{
    var name = prompt("Who are you?");
} while (!name);
console.log(name);
*/

/*
for (var number = 0; number <= 12; number = number + 2)
    console.log(number);
*/

//quebrando  a execucao de um loop
    for (var current = 20; ; current++){
        if(current % 7 ==0)
        break;
    }
    console.log(current);