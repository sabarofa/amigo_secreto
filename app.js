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
    document.getElementById("amigo").focus(); // Coloca o cursor na caixa de entrada de dados
}


function sortearAmigo() { // Define a função "sortearAmigo".
    if (nomes.length < 2){ // Verifica se a matriz "nomes" contém menos de 2 elementos.
        saida.innerHTML += `Digite pelo menos 2 nomes.`; // Se tiver menos de 2 nomes, adiciona esta mensagem ao conteúdo do elemento "resultado".
    } else { // Se a matriz "nomes" contém 2 ou mais elementos...
        let aleatorio = Math.floor(Math.random() * nomes.length); // Gera um índice aleatório baseado no comprimento da matriz "nomes".
        let nomeSorteado = nomes[aleatorio]; // Seleciona o nome correspondente ao índice aleatório.
        saida.innerHTML = `🎉🎉 Parabéns!!  O Nome Sorteado foi: <strong>${nomeSorteado}</strong>`; // Atualiza o conteúdo do elemento "resultado" com o nome sorteado.
    }
}

function reiniciar() { // Define a função "reiniciar".
    document.getElementById("amigo").value = ""; // Limpa o campo de entrada com id "amigo".
    saida.innerHTML = ""; // Limpa o conteúdo do elemento "resultado".
    nomes = []; // Redefine a matriz "nomes" para uma matriz vazia.
    document.getElementById("amigo").focus(); // Coloca o cursor na caixa de entrada de dados
    
}
