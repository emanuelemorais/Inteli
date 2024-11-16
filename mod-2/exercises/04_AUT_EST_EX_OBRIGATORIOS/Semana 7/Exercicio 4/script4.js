function valor(){
    var periodo = document.getElementById("periodo").value; //variavel q puxa valor a aprtir do id
    var pessoas = document.getElementById("pessoas").value; //variavel q puxa valor a aprtir do id
    var valor = 0; // valor inicial sera 0
    


    if(periodo == "diurno"){  //diurno é o valor
        if(pessoas >= 50){ //se mais que 50 pessoas entra nessa condição
            valor = 200 * 0.6; 
        }
        else{
            valor += 200;
        }
    }

    else if(periodo == "noturno"){ //se noturno tiver selecionado
        if(pessoas >= 50){  
            valor = 100 * 0.8;
        }
        else{
            valor += 100;
        }
    }
    
    document.getElementById("info").innerHTML = 'O valor por pessoa será ' + valor + ' reais.' //adiciona texto ao campo info
}



//Se vôo diurno, 200 por pessoa. Se mais do que 50 pessoas, desconto de 40% por pessoa.
//Se vôo noturno, 100 por pessoa. Se mais do que 50 pessoas, desconto de 20% por pessoa.



