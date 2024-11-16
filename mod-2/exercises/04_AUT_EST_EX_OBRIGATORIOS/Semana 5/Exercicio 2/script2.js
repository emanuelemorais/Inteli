


  


function contador(){

    while(valor.value >= 1){

    quantidadeNotas100.value = parseInt(valor.value/ 100);
    valor = valor.value % 100;
    
    quantidadeNotas50.value = parseInt(valor / 50);
    valor1 = valor % 50;
    
    quantidadeNotas20.value = parseInt(valor1/ 20);
    valor2 = valor1 % 20;

    quantidadeNotas10.value = parseInt(valor2 / 10);
    valor3 = valor2 % 10;

    quantidadeNotas5.value = parseInt(valor3/ 5);
    valor4 = valor3 % 5;

    quantidadeNotas2.value = parseInt(valor4/ 2);
    valor5 = valor4 % 2;

    quantidadeNotas1.value = parseInt(valor5/ 1);
    

    }
    
        

        document.getElementById("quantidadeNotas100").innerHTML = 'Serão necessarias ' + quantidadeNotas100.value + ' notas de R$100'
        document.getElementById("quantidadeNotas50").innerHTML = 'Serão necessarias ' + quantidadeNotas50.value + ' notas de R$50'
        document.getElementById("quantidadeNotas20").innerHTML = 'Serão necessarias ' + quantidadeNotas20.value + ' notas de R$20'
        document.getElementById("quantidadeNotas10").innerHTML = 'Serão necessarias ' + quantidadeNotas10.value + ' notas de R$10'
        document.getElementById("quantidadeNotas5").innerHTML = 'Serão necessarias ' + quantidadeNotas5.value + ' notas de R$5'
        document.getElementById("quantidadeNotas2").innerHTML = 'Serão necessarias ' + quantidadeNotas2.value + ' notas de R$2'
        document.getElementById("quantidadeNotas1").innerHTML = 'Serão necessarias ' + quantidadeNotas1.value + ' notas de R$1'
    
    


    
    
    }