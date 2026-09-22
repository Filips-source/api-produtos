const original = {
    id:1,
    nome:'Mouse',
    estoque:8
};

const atualizado = {...original, estoque:5};

console.log({original, atualizado});

const {nome, estoque} = atualizado;

console.log(`${nome} possui ${estoque} unidades(s)`);

//Template string só exibe informações simples, ele não consegue converter objetos ou coleções(arrays)
console.log(`O conteúdo de Atualizado é ${atualizado}`);
console.log('O conteúdo de atualizado é: ', atualizado);    

