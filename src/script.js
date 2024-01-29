var filmes = [];
var posters = [];

    function adicionarFilme() {
        var nomeFilme = document.getElementById("nomeFilme").value;
        var urlPoster = document.getElementById("urlPoster").value;

        if (nomeFilme.trim() === '' || urlPoster.trim() === '') {
            alert("Por favor, preencha ambos os campos.");
            return;
        }

        // Verificar se o filme já está na lista
        var filmeExistente = filmes.find(function(filme) {
            return filme.nome.toLowerCase() === nomeFilme.toLowerCase();
        });

        if (filmeExistente) {
            alert("Este filme já foi adicionado!");
            return;
        }

        // Adicionar filme ao array
        var novoFilme = {
            nome: nomeFilme,
            poster: urlPoster
        };

        filmes.push(novoFilme);

        // Atualizar a lista de filmes no HTML
        atualizarListaFilmes();

        // Limpar os campos de entrada após adicionar um filme
        document.getElementById("nomeFilme").value = "";
        document.getElementById("urlPoster").value = "";
    }

    function atualizarListaFilmes() {
    // Limpar a lista anterior
    document.getElementById("listaFilmes").innerHTML = "";

    // Adicionar os filmes à lista no HTML
    for (var i = 0; i < filmes.length; i++) {
        var listItem = document.createElement("li");

        // Adicionar a imagem primeiro
        listItem.innerHTML = "<img src='" + filmes[i].poster + "' alt='Poster do Filme'>" +
                             "<strong>" + filmes[i].nome + "</strong>";

        // Adicionar botão de remoção
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.onclick = (function(index) {
            return function() {
                removerFilme(index);
            };
        })(i);

        listItem.appendChild(removeButton);

        document.getElementById("listaFilmes").appendChild(listItem);
    }
}

function removerFilme(index) {
    filmes.splice(index, 1);
    atualizarListaFilmes();
}

