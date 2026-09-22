import { writeFile, readFile } from "node:fs/promises"; //com o node:fs sem o "" da erro, coloque node:promese
import { resolve } from "node:path";

const caminho = resolve(import.meta.dirname, 'data', 'saida.json');
const produtos = [{
    id: 1,
    nome: 'Lego Marvel Super Heroes',
    preco: 43
}];
const texto = JSON.stringify(produtos, null, 2);

await writeFile(caminho, texto, 'utf8');

console.log(JSON.parse(await readFile(caminho,'utf8')));
