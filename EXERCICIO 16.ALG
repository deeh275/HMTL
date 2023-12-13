Algoritmo "exercicio 16"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   :Jailson
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/12/2023
Var
   // Seção de Declarações das variáveis
   n1,n2, soma:inteiro
   media:real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
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