function calcular(){
    var nr = numero.value; //pega o valor do numero no html
    var a = nr.substr(-3, 1) //pega o numero das centenas 
    var ts = /\d{3}/ //modelo para comprar se possui se existe pelo menos 3 numeros e conseguir comparar a centenas


    if(ts.test(nr) == true){ //testa se existe pelo menos 3 algarismos
        if(a%2 == 0){ // analiza se é par
            document.getElementById("resultado").innerHTML = "O número das centenas é par"
            console.log(a)
        }
    
        else{ //analiza se é impar
            document.getElementById("resultado").innerHTML = "O número das centenas é impar"
            console.log(a)
        }
    }
    else{
        alert("Digite um número de pelo menos 3 digitos")
    }
    
    
       
    
   
}
