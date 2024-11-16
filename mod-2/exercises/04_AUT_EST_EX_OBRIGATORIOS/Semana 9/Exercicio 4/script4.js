function fibo(){
    var n = document.getElementById("termos").value;
    console.log(n)
    var fibonacci = [];
    fibonacci[0] = 1; //declara que o primeiro termo é 1
    fibonacci[1] = 1; //declara que o segundo termo é 2

    var i = 2;
    while( i < n) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; //formula para caluclar fibonacci
    i++
    }

    document.getElementById("sequencia").innerHTML = "A sequencia é" + fibonacci;
    
}