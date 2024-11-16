function calcular(){

    var valor = document.getElementById("numero").value; //pega valor do html
    var list = valor.split(""); //separa o numero em uma lista
    var list2 = list.map(Number); //tranforma em numero

    var res = 0;
    var i = 0;
    while(i < list2.length){ //faz somar de acordo com a quantidade de algarismos da lista
        res += list2[i];
        i++
    }

    document.getElementById("resultado").innerHTML = "A soma dos algarismos é " + res; //coloca resultado no HTML
}