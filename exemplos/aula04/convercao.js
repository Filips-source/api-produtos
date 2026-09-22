const produto = {
    id: 1,
    nome: "Teclado Magnetico | Akko Fun60 Pro",
    preco: 180,
    disponivel: true
};

//objeto vem com a chave sem aspas duplas, e algun indentificadores visuais
console.log(produto);
console.log(typeof produto);

//transforma objeto em string
const texto = JSON.stringify(produto, null, 2);

//string vem sempre com aspas duplas e sem indentificadores visuais
console.log(texto);
console.log(typeof texto);

//transforma string em objeto
const reconstruido = JSON.parse(texto);

console.log(reconstruido);
console.log(typeof reconstruido);

