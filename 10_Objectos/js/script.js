

var obj = {
nome:'Isabel',
idade:24,
proffisao:'Programadora',
trabalhando:true
}

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)
console.log(obj.idade)
console.log(obj.proffisao)

obj.nome = 'Ntanda'
obj.graduacao = true
console.log(obj.nome)
console.log(obj)
console.log(`O meu nome é ${obj.nome}, estou com ${obj.idade} de idade e sou ${obj.proffisao}`)