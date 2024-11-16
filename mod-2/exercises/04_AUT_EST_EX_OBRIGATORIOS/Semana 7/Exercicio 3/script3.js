

function validar(){ 

    var tel1 = document.getElementById('tel').value
    var re = /[(]\d{2}[)](\s)?\d{5}(-|\s)\d{4}$/; /^$/ //formato do telefone brasileiro (xx)xxxxx-xxxx

    if(re.test(tel1) == true){  //test testa se o numero esta no fromato adequado
        alert("Número aceito com sucesso!")
    }

    if(re.test(tel1) == false){

        alert("Este número não válido, envie no formato (xx)xxxxx-xxxx")
    }
    


}

