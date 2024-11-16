function bemvindo() { //insere texto no html
  let textoBemvindo = "'<br><label>Nome</label><input type='text' id='nome'><br><label>Email</label><input type='text' id='email'><br><label>Telefone</label><input type='text' id='tel'><br><input type='button' value='Enviar' onclick='contato.insert()'><br><br><p class='botaolinkedin'><a href='https://www.linkedin.com/in/emanuele-morais-b17a961a5/' target='blank'><img width='50' height='50'class='linkedin_simbolo'src='imagens/link_simb.png'></a></p>";
  document.getElementById("textoBemvindo").innerHTML = textoBemvindo;
}

$('[data-countdown]').each(function() { //utilização de jquery para fazer um contador
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('%D dias, %H horas, %M minutos e %S segundos'));
  });
});

api = "http://127.0.0.1:3009"

var contato = {
    //Colocar no onClick
  
    insert() {
      var nome = document.querySelector("#nome").value; //cria uma variavel para coletar informação inserida no input
      var email = document.querySelector("#email").value; //cria uma variavel para coletar informação inserida no input
      var tel = document.querySelector("#tel").value; //cria uma variavel para coletar informação inserida no input
  
      if (nome) {
        if (nome.trim() != "") {
          $.ajax({
            type: "POST", // define que sera usado o metodo post
            url: api + "/fazerCadastro", //define qual rota sera usada
            data: {
              nome : nome, //faz a relação da coluna do banco de dados e a variavel
              email : email, //faz a relação da coluna do banco de dados e a variavel
              tel : tel, //faz a relação da coluna do banco de dados e a variavel
            },
          })
            .done(function () { 
              window.location.reload(); //sucesso irá recarregar a pagina e apresentar um alerta
              alert("Enviado com sucesso!")
            })
            .fail(function (msg) {
              //console.log('FAIL');
            })
            .always(function (msg) {
              //console.log('ALWAYS');
            });
        }
      }
    }}