export default class Produto{
    constructor({
        id, nome, preco, estoque = 0, categoria
    }) {
        if(!Number.isInteger(id) || id <= 0) {
            throw new TypeError('ID deve ser um inteiro e um numero positivo');
        }
        if(typeof nome !== 'string' || nome.trim() === '') {
            throw new TypeError('Nome é obrigatorio');
        }
        if(!Number.isFinite(preco) || preco < 0) {
            throw new TypeError('Preço Inválido');
        }
        if(!Number.isInteger(estoque) || estoque < 0 || !Number.isFinite(estoque)) {
            throw new TypeError('Estoque Invalido');
        }
        if(typeof categoria !== 'string' || categoria.trim() === '') {
            throw new TypeError('Categoria é obrigatoria')
        }
        Object.assign(this,{
            id, nome: nome.trim(), preco, estoque, categoria: categoria.trim()
        })
    }
    calcularValorEmEstoque() {
        return this.preco* this.estoque;
    }
    calcularPrecoComDesconto(percentual) {
        if(!Number.isFinite(percentual) || percentual<0 || percentual > 100) {
            throw new RangeError('Desconto deve ser entre 0 a 100');
        }
        return this.preco * (1 - percentual/100);
    }
    }