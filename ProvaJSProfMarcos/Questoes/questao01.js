function somaQuadrado(n1, n2){
    let soma = n1 + n2
    return soma * soma
}
    console.log(somaQuadrado(2,4))
function execCallback(n1, n2, funcao){
    return funcao(n1, n2)


}
console.log(execCallback(3,6,somaQuadrado))

/*a funcao callBack, permite que eu a mencione dentro dela mesma (chamando-a novamente) */