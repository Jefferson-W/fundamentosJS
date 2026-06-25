// For Each

let numeros = [1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++) {
    console.log('numeros[' + i + ']: ' + numeros[i])
}

numeros.forEach(function(numero) {
    console.log('numero: ' + numero)
})