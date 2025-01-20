export function filtrarPorTag (tag, livros) {
    const filtro = livros.filter(livro => livro.categoria === tag);
    return filtro;
}

export function ordenarPorPreço (livros) {
    const ordem = [...livros].sort((a, b) => a.preco - b.preco);
    return ordem;
}

export function exibirLivrosDisponíveis(livros) {
    const disponíveis = livros.filter(livro => livro.quantidade > 0);
    return disponíveis;
}