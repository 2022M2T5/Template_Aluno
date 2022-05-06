var listadealunos = [];

var aluno = {
    nomeAluno:"",
    periodoAluno: 0
};

function adicionarAlunoLista(){
    var nome = document.getElementById("nomeAluno").value;
    var periodo = document.getElementById("periodoAluno").value;
    var a1 = object.create(Aluno);
    a1.nomeAluno = nome;
    a1.periodoAluno = periodo;
    ListaDeAlunos.push(a1);
    console.log("inserindo aluno" + a1)
};


function mostrarAlunos(){
    var listaalunoshtml = "";
    for(var i=0 ; i < listadealunos.length; i++){
        listaDeAlunos += (listaDeAlunos[i].nomeAluno + "-" +
                        (listaDeAlunos[i].periodoAluno) + "</br>");

    }
    document.getElementById("saidaAlunos").innerHTML = listaalunoshtml
}