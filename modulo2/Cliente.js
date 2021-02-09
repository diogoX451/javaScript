//Manter uma estrutura de negocio definir uma class, onde a muitas repetições
//para usar compartilhamento de arquivo usar export 
export class Cliente{
    get cpf(){
        return this._cpf;
    }
    // constructor

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}