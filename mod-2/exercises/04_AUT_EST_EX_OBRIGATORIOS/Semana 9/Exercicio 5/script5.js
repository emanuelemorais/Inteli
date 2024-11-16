

function primos(){

    //variaveis para pegar valor do html
    var i = document.getElementById("n1").value; 
    var limite = document.getElementById("n2").value;
    var lista = [];
    
    
    while(i <= limite){ 
        let primo = true; 
        i++
        

        for(let divisor = 2; divisor < i; divisor++){ //analiza se possui algum divisor alem de 1 e ele mesmo
            if(i % divisor == 0){
                primo = false; // se possui, não é primo e passa a ser falso
                break;

                
            }  
            
            
        }
    
        if (primo){ //adiciona a lista os que são primos
            lista.push(i);
        } 
       

        
        //adiciona texto com valores primos no html
        document.getElementById("numerosprimos").innerHTML = "Os números primos desse intervalo são " + lista; 
        
       
       
    }
 
}


