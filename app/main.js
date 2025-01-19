import { exibirLivros } from "./foreach.js";
import { fazerDesconto } from "./map.js";

let livros = [];

const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    let livrosComDesconto = fazerDesconto(livros);

    console.table(livros);
    exibirLivros(livrosComDesconto);
}
getBuscarLivrosDaAPI();