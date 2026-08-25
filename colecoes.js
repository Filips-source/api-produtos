const produtos = [
    {id:1,nome:'Mouse',estoque: 22,categoria:'periferico'},
    {id:2,nome:'Mouse pad',estoque: 55,categoria:'periferico'},
    {id:3,nome:'Ipad',estoque: 32,categoria:'periferico'},
    {id:4,nome:'Headset',estoque: 99,categoria:'periferico'},
    {id:5,nome:'Laptop',estoque: 78,categoria:'teste'},
    {id:6,nome:'Linux Mint',estoque: 10,categoria:'Sistema operacional'}       
]


// map 

// const nomes = produtos.map((nome)=>nome); // busca a info do nome e adiciona as informações requisitadas a variavel nome denovo
// console.log(nomes);

const categorias = produtos.filter((produtos)=>produtos.categoria === 'oi');
console.log(categorias);

const monitor = produtos.find(({id})=> id === 2);
console.log(monitor);

const reajustados = produtos.filter(({categoria})=> categoria === 'Periféricos')
.map((produto)=>({
    ...produto, preco: produto.preco*1.2
}));

console.log(produtos, reajustados);