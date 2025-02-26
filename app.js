let nomes = []; // Cria uma matriz vazia chamada "nomes" para armazenar os nomes dos amigos.
let saida = document.getElementById("resultado"); // Obtém o elemento HTML com o id "resultado" e o armazena na variável "resultado".

function adicionarAmigo(){ // Define a função "adicionarAmigo".
    let digiteUmNome = document.getElementById("amigo").value; // Obtém o valor do campo de entrada com id "amigo" e o armazena na variável "digiteUmNome".
    if (digiteUmNome == ""){ // Verifica se o campo de entrada está vazio.
        alert ("O campo está vazio. Digite um nome para começar."); // Exibe um alerta se o campo estiver vazio.
        return; // Encerra a função se o campo estiver vazio.
    } 

    nomes.push(digiteUmNome); // Adiciona o nome digitado à matriz "nomes".
    document.getElementById("amigo").value = ""; // Limpa o campo de entrada.

    let listaDeNomes = "<ul>"; // Cria uma string que representa o início de uma lista não ordenada (ul).
    for (let i = 0; i < nomes.length; i++) { // Loop através da matriz "nomes".
        listaDeNomes += `<li>${nomes[i]}</li>`; // Adiciona cada nome da matriz "nomes" como um item de lista (li) à string "listaDeNomes".
    }
    listaDeNomes += "</ul>"; // Adiciona o fechamento da lista não ordenada à string "listaDeNomes".
    saida.innerHTML = listaDeNomes; // Atualiza o conteúdo do elemento "resultado" com a string "listaDeNomes".
}

function reiniciar() { // Define a função "reiniciar".
    document.getElementById("amigo").value = ""; // Limpa o campo de entrada com id "amigo".
    saida.innerHTML = ""; // Limpa o conteúdo do elemento "resultado".
    nomes = []; // Redefine a matriz "nomes" para uma matriz vazia.
}
