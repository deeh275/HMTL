Algoritmo "exercicio 16"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   :Jailson
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/12/2023
Var
   // Se��o de Declara��es das vari�veis
   n1,n2, soma:inteiro
   media:real
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Escrever nota 1a:")
   leia(n1)
   escreval("Escrever nota 2a:")
   leia(n2)
   media <- n1+n2 /2
   escreval("total:" ,media)
   se media >= 6 entao
      escreval("Aprovado!!!")
   senao
      escreval("Reprovado!!!")
   fimse

Fimalgoritmo