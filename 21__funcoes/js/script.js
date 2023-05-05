

function primeiroFuncao(){

  console.log('hello word')
}

primeiroFuncao()
primeiroFuncao()
primeiroFuncao() // posso chamar quantas vezes eu precisar

function dizerNome(nome){
console.log('o nome é:' + nome)
}

dizerNome('Isabel')
dizerNome('Isabel')
dizerNome('Isabel') // posso chamar quantas vezes eu precisar

// tbm posso armazenar o nome numa variavel 

var nomeBancoDados = 'Joao'

dizerNome(nomeBancoDados)

function soma(a, b){
var soma = a+b
return soma // ou, podemos retornar logo return (a+b)
}

var soma = soma(2, 4)

console.log(soma) // console.log(soma(2,4 ))
