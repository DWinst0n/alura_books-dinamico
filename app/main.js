import { exibirLivros, livrosContainer, botaoRedefinirLivros } from "./exibirLivros.js";
import { fazerDesconto } from "./aplicarDesconto.js";
import { filtrarPorTag } from "./filtrosLivros.js"

let livros = [];

const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function controleLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);

    let livrosComDesconto = fazerDesconto(livros);
    exibirLivros(livrosComDesconto);
    const botoesID = ["btnFiltrarLivrosFront", "btnFiltrarLivrosBack", "btnFiltrarLivrosDados"];
    botoesID.forEach(botao => {
        const botaoFiltrarTag = document.getElementById(botao);
        botaoFiltrarTag.addEventListener("click", () => {
            livrosContainer.innerHTML = "";
            const filtro = filtrarPorTag(botaoFiltrarTag.value, livros);
            exibirLivros(filtro);
            botaoRedefinirLivros(livrosComDesconto);
        });
    })
    
}
controleLivrosDaAPI();