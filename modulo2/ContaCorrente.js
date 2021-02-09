 import { Cliente } from "./Cliente.js"; 
 
 export class ContaCorrente{
    //atributo estatico
    static numberConta = 0;


    agencia;

    _cliente;
    //valor para algo usar set

    set cliente(newValue){
        // instanceof == Instancia 
        if(newValue instanceof Cliente){
            this._cliente = newValue;
        }   
    }

    get cliente(){
        return this._cliente;
    }


    //manter privados alguns argumentos usando #, Para produção usar _
    _saldo = 0;

    get saldo(){
        return this._saldo; 
    }
    //metodos usar () onde vai ter uma operação
     //para trabalhar com parametro da mesma class usa this
    saque(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            // usar return no fim da função
            return valor;
        } else {
            console.log("Você não tem dinheiro");
        }
        
    };
    deposito(valor){
        if(valor <= 0){
          return;
        }
        this._saldo += valor;  
    };

    transferir(valor, conta){
        const valorSaque = this.saque(valor);
        conta.deposito(valorSaque);

        //  conta.deposito(valorSaque);
        
        // console.log(this.valorSaque)
    }
    constructor(agencia,cliente ) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numberConta += 1;

    }
}