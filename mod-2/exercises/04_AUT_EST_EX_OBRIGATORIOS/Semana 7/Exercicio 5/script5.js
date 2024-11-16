//criar campos para inserir alunos e suas respectivas notas
function alunos(){
  
    quantidadeAlunos = document.getElementById('quantidadeAlunos').value; //pega a qnt de alunos
    var i = 0;
    while (i < quantidadeAlunos) { //cria os campos de acordo cm a quantidade de alunos
        document.getElementById("alunosaq").innerHTML += `<br > <label> Aluno ${i + 1}: </label> <input type="number" id="prova${i + 1}" placeholder="Prova"> <input type="number" id="trabalho${i + 1}" placeholder="Trabalho">`;
        i++
    }
}

//funcao para calcular notas de acordo com os requisitos
function calcular(){
    debugger
    var t = 0;
    var numeradormediageral = 0;
    var provas = 0;
    var trabalhos = 0;
    var max_prova = 0;
    var alunomax_prova = 0;
    var max_trabalho = 0;
    var alunomax_trabalho = 0;
    var min_prova = 1 /0; //dividido por 0 para ser infinito
    var alunomin_prova = 0;
    var min_trabalho = 1/0; //dividido por 0 para ser infinito
    var alunomin_trabalho = 0;


    while(t < quantidadeAlunos) {


        //pegar a nota de acordo com o id
        var idprova = String("prova" + String( t + 1 ));
        prova = Number(document.getElementById(idprova).value); //pegar o valor da prova
        var idtrabalho = String("trabalho" + String( t + 1 ));
        trabalho = Number(document.getElementById(idtrabalho).value); //pegar o valor do trabalho
        
        media = (2*prova + 3*trabalho)/5 //calcula media
        numeradormediageral += media;  
        document.getElementById("medias").innerHTML += `A media do Aluno ${t + 1} é ${media} <br>` //insere no html as medias

        provas += prova;
        trabalhos += trabalho;
       
        //condições para comparar as notas e encontrar maximos e minimos
       if (max_prova < prova){
           max_prova = prova;
           alunomax_prova = t + 1;
       }
       if (min_prova > prova){
        min_prova = prova;
        alunomin_prova = t + 1;
        }
       if (max_trabalho < trabalho){
        max_trabalho = trabalho;
        alunomax_trabalho = t + 1;
       }
       if (min_trabalho > trabalho){
        min_trabalho = trabalho;
        alunomin_trabalho = t + 1;
        }
        

        t++
  }
  
  
  //calculos para encontrar medias gerais, media das provas e dos trabalhos
  mediageral = numeradormediageral/quantidadeAlunos;
  provasmedia = provas /quantidadeAlunos;
  trabalhosmedia = trabalhos/quantidadeAlunos;

  //adiciona informações no html
  document.getElementById("mediageral").innerHTML += `A media geral da turma é ${mediageral} <br>` 
  document.getElementById("provas").innerHTML += `A media geral das provas é ${provasmedia} <br>`
  document.getElementById("trabalhos").innerHTML += `A media geral dos trabalhos é ${trabalhosmedia} <br>`
  document.getElementById("provamax").innerHTML += `A maior nota de prova foi de ${max_prova} do aluno ${alunomax_prova} <br>`
  document.getElementById("trabmax").innerHTML += `A maior nota de trabalho foi de ${max_trabalho} do aluno ${alunomax_trabalho} <br>`
  document.getElementById("provamin").innerHTML += `A menor nota de prova foi de ${min_prova} do aluno ${alunomin_prova} <br>`
  document.getElementById("trabmin").innerHTML += `A menor nota de trabalho foi de ${min_trabalho} do aluno ${alunomin_trabalho} <br>`
   
  

}

