const produtos = [
    {id:1, nome:'Mouse', preco:80, categoria:'Periféricos'},
    {id:2, nome:'Teclado Magnetico', preco:180, categoria:'Periféricos'},
    {id:3, nome:'Mouse Pad', preco:94, categoria:'Pano'},
    {id:4, nome:'Headset', preco:120, categoria:'Fone'},
    {id:5, nome:'Iphone 13 Pro Max', preco:4000, categoria:'Celulares'}
]

//map
// const nomes = produtos.map((nome)=>nome);
// console.log(nomes);

// const categorias = produtos.filter((produtos)=>produtos.categoria === 'Celulares');
// console.log(categorias);

// //find 
// const iphone = produtos.find((id)=> id === 5);
// console.log(iphone);

const reajustados = produtos.filter((produto)=>produto.categoria === 'Celulares').map((produto)=>({...produto, preco: produto.preco*1.2}));

console.log(produtos, reajustados);



