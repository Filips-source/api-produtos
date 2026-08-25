const original = {
    id:1,
    nome:'Mouse',
    estoque: 8
};

const atualizado = {...original, estoque:5};

console.log({original, atualizado});

const {nome, estoque} = atualizado;

console.log(`${nome} possui ${estoque} unidade(s)`);

// template string
console.log(`O conteúdo de Atualizado é: ${atualizado}`);
console.log('O conteúdo de Atualizado é: ', atualizado);