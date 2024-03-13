var Pessoa = new Object()

    Pessoa.nome = "Matheus"
    Pessoa.nascimento = "29/11/2002"
    Pessoa.cpf = "111.111.111-11"


var Aluno = new Object()

    Aluno.nome = "João"
    Aluno.nascimento = "22/12/1999"
    Aluno.cpf = "222.222.222-22"
    Aluno.matricula = "12345"
    Aluno.notas = (2, 4, 6, 8)


function MediaDasNotas(notas, media){
    for(let i = 1; notas.lenght; i++){
        notas += notas[i]
    }
    media = notas / notas.lenght
}    
console.log(media)

