import { exibirLivros, botaoRedefinirLivros } from "./exibirLivros.js";
import { fazerDesconto } from "./aplicarDesconto.js";
import { filtrarPorTag, ordenarPorPreço, exibirLivrosDisponíveis } from "./filtrosLivros.js"

let livros;

const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function controleLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);

    let livrosComDesconto = fazerDesconto(livros);
    exibirLivros(livrosComDesconto);

    //botões
    const botoesID = ["btnFiltrarLivrosFront", "btnFiltrarLivrosBack", "btnFiltrarLivrosDados"];
    botoesID.forEach(botao => {
        const botaoFiltrarTag = document.getElementById(botao);
        botaoFiltrarTag.addEventListener("click", () => {
            const filtro = filtrarPorTag(botaoFiltrarTag.value, livros);
            exibirLivros(filtro);
            botaoRedefinirLivros(livrosComDesconto);
        });
    })
    const botaoOrdenarPorPreço = document.getElementById("btnOrdenarPorPreco");
    botaoOrdenarPorPreço.addEventListener("click", () => {
        const ordenados = ordenarPorPreço(livrosComDesconto);
        exibirLivros(ordenados);
        botaoRedefinirLivros(livrosComDesconto);
    });
    const botaoMostrarDisponíveis = document.getElementById("btnLivrosDisponiveis");
    botaoMostrarDisponíveis.addEventListener("click", () => {
        const disponíveis = exibirLivrosDisponíveis(livrosComDesconto);
        exibirLivros(disponíveis);
        botaoRedefinirLivros(livrosComDesconto);
    })
}
controleLivrosDaAPI();