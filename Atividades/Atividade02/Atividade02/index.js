const catalogoDaBiblioteca = [
  { tombo: 'L-101', titulo: 'JavaScript Essencial', tipo: 'Livro', disponivel: true },
  { tombo: 'R-205', titulo: 'Tecnologia em Foco', tipo: 'Revista', disponivel: true },
  { tombo: 'L-309', titulo: 'Algoritmos na Prática', tipo: 'Livro', disponivel: false }
];

const tipoDesejado = process.argv[2] || 'Livro';

function livrosDisponiveis(catalogoDaBiblioteca) {

  if (typeof tipoDesejado !== 'string' || tipoDesejado.trim() === ''){
    throw new Error('Tipo invalido')};

  const filtrado = catalogoDaBiblioteca.filter((catalogo)=>catalogo.tipo === tipoDesejado && catalogo.disponivel).map((catalogo)=>({tombo: catalogo.tombo, titulo: catalogo.titulo}));
  return filtrado;
}


console.log(livrosDisponiveis(catalogoDaBiblioteca));


// TODO: substitua as três linhas acima usando filter e map, sem alterar o catálogo.
