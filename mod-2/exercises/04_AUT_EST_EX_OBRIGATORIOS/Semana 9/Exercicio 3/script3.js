function calcular(){

    //pega os valores do html e atribui a variaveis
    var nome1 = document.getElementById("nm1").value; 
    var nome2 = document.getElementById("nm2").value;
    var nome3 = document.getElementById("nm3").value;

    var lista = [];
    lista.push(nome1, nome2, nome3); //insere os valores das variaveis a lista
    lista.sort(); //ordena lista

    //adiciona em ordem no html
    document.getElementById("alf").innerHTML = "A ordem alfabetica é " + lista[0] + ", " + lista[1] + ", " + lista[2] + "."




}