export function filtrarPorTag (tag, livros) {
    const filtro = livros.filter(livro => livro.categoria === tag);
    return filtro;
}