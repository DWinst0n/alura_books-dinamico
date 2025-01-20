export const livrosContainer = document.getElementById("livros");
export function exibirLivros(listaLivros) {
    listaLivros.forEach(livro => {
        livrosContainer.innerHTML += `<div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__autor">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });
}

export function botaoRedefinirLivros (listaOriginal) {
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
        exibirLivros(listaOriginal);
        botaoRedefinir.remove();
    });
}
}