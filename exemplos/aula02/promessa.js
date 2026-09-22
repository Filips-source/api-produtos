function consultarProduto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) resolve({ id: 1, nome: "Iphone 13 Pro Max" });
      else reject(new Error(`Produto ${id} não encontrado`));
    }, 80);
  });
}

consultarProduto(1)
  .then((produto) => console.log("Sucesso: ", produto))
  .catch((erro) => console.error("Falha: ", erro.message));

async function executar(id) {
  try {
    const produto = await consultarProduto(id);
    console.log("Sucesso: ", produto);
  } catch (erro) {
    console.error("Falha: ", erro.message);
  }
}

executar(1);
