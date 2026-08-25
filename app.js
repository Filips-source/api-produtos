const arquivoDeConfiguracao = process.argv[2];

const idInformado = process.argv[3]; //

let configuracaoCarregada = true


const produtos = [
    {id:1,nome:'Mouse',estoque: 22,categoria:'periferico'},
    {id:2,nome:'Mouse pad',estoque: 55,categoria:'periferico'},
    {id:3,nome:'Ipad',estoque: 32,categoria:'periferico'},
    {id:4,nome:'Headset',estoque: 99,categoria:'periferico'},
    {id:5,nome:'Laptop',estoque: 78,categoria:'teste'},
    {id:6,nome:'Linux Mint',estoque: 10,categoria:'Sistema operacional'}       
]

if (arquivoDeConfiguracao){

    try{
        process.loadEnvFile(arquivoDeConfiguracao);
    }catch{
        console.error(`Arquivo de configuração não encontrado: ${arquivoDeConfiguracao}`);
        process.exitCode = 1; // se executou de 1 pra cima é erro, 0 é que deu certo
        configuracaoCarregada = false;
    }

}



const obrigatorias = ['PORT','NOME_ALUNO','TURMA'];
const ausentes = obrigatorias.filter ((nome) => !process.env[nome]?.trim());

for (const nome of obrigatorias){
    const valor = process.env[nome];

    if(typeof valor !== 'string' || valor.trim()=== ''){
        ausentes.push[nome]; // adiciona o item a array ao fim da array
    }
}

if(configuracaoCarregada && ausentes.length){
    console.error(`Configure no .env: ${ausentes.join(',')}`);
    process.exitCode = 1;
    configuracaoCarregada = false;
}


const esperar = (ms) => new Promise(
    (resolve) =>setTimeout(resolve, ms)
);

async function buscarProdutoPorId(id){
    await esperar (100);
    if (!Number.isInteger(id)){
        throw new Error ('Identificado Inteiro Obrigatório');
    }
    const produto = produtos.find((item) => item.id === id);
    if(!produto){
        throw new Error (`Produto ${id} não encontrado!`);
    }
    return{...produto}
}

async function listarCategorias() {
    await esperar(100);
    const categorias = produtos.map(({categoria})=>categoria);
    return [...new Set(categorias)];
}

/*  
}else if(configuracaoCarregada){
    console.table({
        estudante: process.env.NOME_ALUNO,
        turma: process.env.TURMA, 
        projeto: 'api-produtos',
        ambiente: process.env.NODE_ENV || 'development',
        node: process.version,
        sistema: `${process.platform} ${process.arch}`,
        diretorio: process.cwd(),
        portaConfigurada: process.env.PORT

    })
    console.log('ambiente configurado com sucesso');
}
 */