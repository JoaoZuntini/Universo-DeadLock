function entrar(){
    let nome = document.getElementById("nome").value;

    let nomes = localStorage.getItem("nomeUser");

    nomes = nomes + nome + ", ";

    localStorage.setItem("nomeUser", nomes);

    console.log(localStorage.getItem("nomeUser"));
    

    let mensagem = "Bem-vindo ao nosso site, " + nome + "!";

    document.getElementById("mensagem").innerText = mensagem;
    
}

