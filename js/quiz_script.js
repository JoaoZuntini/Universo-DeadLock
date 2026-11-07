let alternativaA = document.getElementById("alt_a");
let alternativaB = document.getElementById("alt_b");
let alternativaC = document.getElementById("alt_c");
let alternativaD = document.getElementById("alt_d");
let alternativaE = document.getElementById("alt_e");

let resultado = document.getElementById("resultado");
let proxima = document.getElementById("proxima");

let alternativas = [
    alternativaA,
    alternativaB,
    alternativaC,
    alternativaD,
    alternativaE
];

for(let i = 0; i < alternativas.length; i++){
        alternativas[i].addEventListener("click", function(){
        verificarResposta(i);
    })
}

function verificarResposta(resposta){
    if(resposta == 1){
        resultado.innerText = "Resposta Correta!!"
    }else{
        resultado.innerText = "Resposta Incorreta!"
    }
}

let pergunta = document.getElementById("pergunta");

proxima.addEventListener("click", function(){
    numero_pergunta.innerText = "Pergunta 2 de 2"
    resultado.innerText = ""
    proxima.innerText = "Obrigado por fazer este Quiz!"
    pergunta.innerText = "Qual personagem faz parte do DeadLock?";

    alternativaA.innerText = "A) Danny Defunto";
    alternativaB.innerText = "B) Mercy";
    alternativaC.innerText = "C) Bastion";
    alternativaD.innerText = "D) Alanzoka";
    alternativaE.innerText = "E) Kratos";

    for(let i = 0; i < alternativas.length; i++){

        alternativas[i].addEventListener("click", function(){
            verificarResposta2(i);
        });

    }


})



function verificarResposta2(resposta){
    if(resposta == 0){
        resultado.innerText = "Resposta Correta!!"
    }else{
        resultado.innerText = "Resposta Incorreta!!"
    }
}
