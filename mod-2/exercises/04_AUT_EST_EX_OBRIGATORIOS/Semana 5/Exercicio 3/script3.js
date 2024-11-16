function funcao(){

    function comparar(a, b){
        return a - b
    }
  
  console.log(numeros.value)
  var array = numeros.value.split(", ").sort(comparar) //split serve para separar e sort para ordenar 
  console.log(array)
    

    document.getElementById("listaordenada").innerHTML = array
  
 
  if(array.includes(foco.value)){
     console.log(foco.value)
  var posicao = array.indexOf(foco.value); //indexOf busca o index do numero
    document.getElementById("numeroEmfoco").innerHTML = posicao
  
  console.log(posicao)
  }
  else{
    document.getElementById("numeroEmfoco").innerHTML = "Digite um número válido!"
  }
}

