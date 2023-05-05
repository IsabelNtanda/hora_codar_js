// lenhth numero de caraceres que contem uma frase ou palavra

var nome = 'isabel'
console.log(nome.length)

var obj = 'bola'
console.log(obj.length)
console.log(nome[2])

var frase = 'o rato roeu a roupa do rei de Roma'
console.log(frase.indexOf('roeu'))

var roeu = frase.slice(7, 11)
console.log(roeu)

var novaFrase = frase.replace('roeu', 'teste')