let mediaGeral = 0
let numHomens = 0
let qtdMulheres7 = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10){
    nota = parseInt(prompt( "Digite a nota do " + contador + " º aluno"))
    sexo = String(prompt("Digite o sexo do alund (m/f)"))

    if( sexo == "m"){
     if (nota > maiorNotaHomens){
        maiorNotaHomens = nota
     }
     numHomens++
    }

    if(sexo == "f" && nota > 7 ){
        
            qtdMulheres7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos foi " + mediaGeral)
console.log("A quantidade de homens cadastrados foi " + numHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi " + qtdMulheres7)
console.log("A maior nota entre os homems foi " + maiorNotaHomens)

