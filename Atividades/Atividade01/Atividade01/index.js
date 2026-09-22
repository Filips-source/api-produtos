const componenteOriginal = Object.freeze({
  id: 17,
  nome: 'Sensor ultrassônico',
  estoque: null,
  bancada: 'Robótica'
});

const novoEstoque = Number(process.argv[2] || '12');

function atualizarEstoque(componenteOriginal, novoEstoque) {
  // TODO: valide a quantidade e devolva uma cópia com spread.
  if (typeof novoEstoque !== 'number' || isNaN(novoEstoque) || novoEstoque < 0) {
    throw new Error('Quantidade inválida');
  }
  const atualizado = {...componenteOriginal, estoque: novoEstoque};
  return atualizado;
}

try {
  const componenteAtualizado = atualizarEstoque(componenteOriginal, novoEstoque);
  console.log({ componenteOriginal, componenteAtualizado });
} catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}
