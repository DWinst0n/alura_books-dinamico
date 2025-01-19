import { exibirLivros, livrosContainer } from "./exibirLivros.js";
import { fazerDesconto } from "./aplicarDesconto.js";
import { filtrarPorTag } from "./filtroLivros.js"

let livros = [];

const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);

    let livrosComDesconto = fazerDesconto(livros);
    exibirLivros(livrosComDesconto);
    const botoesID = ["btnFiltrarLivrosFront", "btnFiltrarLivrosBack", "btnFiltrarLivrosDados"];
    botoesID.forEach(botao => {
        const botaoFiltrar = document.getElementById(botao);
        botaoFiltrar.addEventListener("click", () => {
            livrosContainer.innerHTML = "";
            const filtro = filtrarPorTag(botaoFiltrar.value, livros);
            exibirLivros(filtro);

            if(document.querySelector(".botao__redefinir") === null) {
                const listaBotoes = document.querySelector(".nav");
                const itemBotao = document.createElement("li");
                const botaoRedefinir = document.createElement("button");
                botaoRedefinir.textContent = "TODOS OS LIVROS"
                botaoRedefinir.classList.add("btn");
                botaoRedefinir.classList.add("botao__redefinir")
                itemBotao.appendChild(botaoRedefinir);
                listaBotoes.appendChild(itemBotao);

                botaoRedefinir.addEventListener("click", () => {
                    livrosContainer.innerHTML = "";
                    exibirLivros(livrosComDesconto);
                    botaoRedefinir.remove();
                });
            }
        });
    })
}
getBuscarLivrosDaAPI();