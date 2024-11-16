function somar() {
    res.value = parseFloat(v1.value) + parseFloat(v2.value); } 
    
function subtrair () { 
    res.value = parseFloat(v1.value) -parseFloat(v2.value); } 
        
function multiplicar () {
    res.value = parseFloat(v1.value) * parseFloat(v2.value); } 
    
function dividir () {

    if (parseFloat(v2.value) === 0) res.value = "Erro!";
    else res.value = parseFloat(v1.value) / parseFloat(v2.value); } 

function dividir_inteiro (){

    res.value = parseInt(v1.value / v2.value); 
}
function resto_divisao () {

    if (parseFloat(v2.value)==0) res.value ="Erro!"
    else res.value = parseFloat(v1.value) % parseFloat(v2.value)
}