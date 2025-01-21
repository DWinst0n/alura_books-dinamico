const livrosContainer = document.getElementById("livros");

export function exibirLivros(listaLivros) {
  
  livrosContainer.innerHTML = "";
  let total = 0;
  let precoId = 1;

  listaLivros.forEach((livro) => {
    const estaDisponivel = livro.quantidade > 0;
    let livroHTML = `<div class="livro">
        <img class="livro__imagens${estaDisponivel ? "" : " indisponivel"}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__autor">${livro.autor}</p>
        <p class="livro__preco" id="preco${precoId}">${estaDisponivel ? "R$" + livro.preco.toFixed(2) : "Indisponível"}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`;
    livrosContainer.innerHTML += livroHTML;
    precoId++;
    if (estaDisponivel) {
      total += livro.preco;
    }
  });
  document.getElementById("valor").textContent = `R$ ${(total - total * 0.2).toFixed(2)}`;
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
      livrosContainer.innerHTML = ""
      exibirLivros(listaOriginal);
      botaoRedefinir.remove();
    });
}
}