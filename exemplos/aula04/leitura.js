import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const caminho = resolve(import.meta.dirname, 'data', 'produtos.json');

const texto = await readFile(caminho, 'utf8');
console.log(texto);
console.log(typeof texto);

const reconstruir = JSON.parse(texto);
if (!Array.isArray(reconstruir)) {
    throw new TypeError('O catalogo JSON deve conter um array');
}

console.log(reconstruir);
console.log(typeof reconstruir);
