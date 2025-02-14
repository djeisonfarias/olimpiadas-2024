function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "Busca vazia, informe o nome de um atleta para a busca"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let foto = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) 
            || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += ` 
                    <div class="item-resultado">
                    <img src=${dado.foto} alt="">
                    <h2>                
                        <a href="#" target="_blank">${dado.titulo}</a>
				    </h2>         
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href= ${dado.link} target="_blank">Mais informações</a> 
                    </div> `;
        }
        console.log(dado.titulo.includes(campoPesquisa))
        // Cria uma nova div para cada resultado      
    }

     if (!resultados) {
         resultados = "<p>Nenhum resultado<p>"
     }

    // Atribui os resultados à seção HTML
    section.innerHTML = resultados;
}  