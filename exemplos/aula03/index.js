import Produto from "./Produto.js";
import { formatarMoeda } from "./formatarMoeda.js";

// console.log(formatarMoeda(6.67));

const produto = new Produto({id: 1, nome: 'Mouse Logitec Superlight 2', preco: 599, estoque: 67});

// console.log(`${produto.nome} preço:${formatarMoeda(produto.preco)}`);

produto.retirar(1);
console.log(produto);


