import { exibirLivros, botaoRedefinirLivros } from "./exibirLivros.js";
import { fazerDesconto } from "./aplicarDesconto.js";
import { filtrarPorTag, ordenarPorPreço, exibirLivrosDisponíveis } from "./filtrosLivros.js"

let livros;

const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function controleLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);

    //controle de livros exibidos e se o desconto é aplicado
    const desconto = true;
    let livrosExibidos = livros;

    if (desconto){ 
    const livrosComDesconto = fazerDesconto(livros);
    livrosExibidos = livrosComDesconto;
    }
    exibirLivros(livrosExibidos);

    //botões
    const botoesID = ["btnFiltrarLivrosFront", "btnFiltrarLivrosBack", "btnFiltrarLivrosDados"];
    botoesID.forEach(botao => {
        const botaoFiltrarTag = document.getElementById(botao);
        botaoFiltrarTag.addEventListener("click", () => {
            const filtro = filtrarPorTag(botaoFiltrarTag.value, livros);
            exibirLivros(filtro);
            botaoRedefinirLivros(livrosExibidos);
        });
    })
    const botaoOrdenarPorPreço = document.getElementById("btnOrdenarPorPreco");
    botaoOrdenarPorPreço.addEventListener("click", () => {
        const ordenados = ordenarPorPreço(livrosExibidos);
        exibirLivros(ordenados);
        botaoRedefinirLivros(livrosExibidos);
    });
    const botaoMostrarDisponíveis = document.getElementById("btnLivrosDisponiveis");
    botaoMostrarDisponíveis.addEventListener("click", () => {
        const disponíveis = exibirLivrosDisponíveis(livrosExibidos);
        exibirLivros(disponíveis);
        botaoRedefinirLivros(livrosExibidos);
    })
}
controleLivrosDaAPI();