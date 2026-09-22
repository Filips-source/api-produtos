const ferramentas = [
  { codigo: 'MED-01', nome: 'Paquímetro', categoria: 'Medição', estoque: 6 },
  { codigo: 'COR-02', nome: 'Alicate de corte', categoria: 'Corte', estoque: 9 },
  { codigo: 'MED-03', nome: 'Trena', categoria: 'Medição', estoque: 4 }
];

export function listarFerramentas(categoria) {
  if(typeof categoria !== 'string' || categoria.trim() === '') {
    throw new TypeError('Categoria é obrigatorio')
  }
  return ferramentas.filter((ferramenta) => ferramenta.categoria === categoria).map((ferramenta)=>({...ferramenta}));
}
