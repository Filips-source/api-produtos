export default class Produto{
    constructor({id, nome, preco, estoque = 0}){
        if(!Number.isInteger(id) || id <= 0) {
            throw new TypeError('ID deve ser um inteiro e um numero positivo');
        }
        if(typeof nome !== 'string' || nome.trim() === '') {
            throw new TypeError('Nome é obrigatorio');
        }
        if(!Number.isInteger(preco) || preco < 0) {
            throw new TypeError('Preço Inválido');
        }
        if(!Number.isInteger(estoque) || estoque < 0 || !Number.isFinite(estoque)) {
            throw new TypeError('Estoque Invalido');
        }
        Object.assign(this,{
            id, nome: nome.trim(), preco, estoque
        })
    }
    retirar(quantidade) {
            if(!Number.isInteger(quantidade) || quantidade <= 0) {
                throw new RangeError('Quantidade de saída inválida');
            }

            if(quantidade > this.estoque) {
                throw new RangeError('Estoque insuficiente');
            }
            this.estoque -= quantidade
        }
}