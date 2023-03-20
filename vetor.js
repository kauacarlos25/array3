let res = document.getElementById('res') 


let pais = ['Chile','Bolivia','Brasil', 'Argentina', 'Paraguai']
let cidades = new Array('Tijucas', 'Itajai','São josé')

//console.log(pais[2])
//console.log(cidades[1])
console.log(pais)
console.log(cidades)

pais.push('Uruguai')
pais.unshift('Colombia')

function inserir(){
    pais.pop()
    pais.shift()

    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
}