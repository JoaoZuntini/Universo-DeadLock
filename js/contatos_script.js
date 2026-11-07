function btn_enviar(){
    let motivo = document.getElementById("motivos").value;

    if(motivo == "duvida"){
        document.getElementById("mensagem_contato").innerText = "Obrigado pelo contato! Recebemos sua dúvida e vamos entrar em contato.";
    }else if(motivo == "sugestao"){
        document.getElementById("mensagem_contato").innerText = "Obrigado pelo contato! Recebemos sua sugestão e vamos entrar em contato.";

    }else if(motivo == "feedback"){
        document.getElementById("mensagem_contato").innerText = "Muito obrigado pelo seu feedback!!"
    }
}

