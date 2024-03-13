let mutavel = 1  /*uma variavel do tipo let, pode ter seu valor alterado. */
console.log(mutavel)

const imutavel = 2 /*uma variável const não permite esta mudança, como o nome da variável diz, é imutável.*/
console.log(imutavel)

mutavel = 5
console.log(mutavel) /* printa o novo valor */

imutavel = 4
/*console.log(imutavel) não printa o novo valor */