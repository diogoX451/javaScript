

export class ContaPoupanca{
    constructor(saldoIncial, cliente, agencia){
        // todo construtor sempre ser iniciado e declarado
        this._saldoIncial = saldoIncial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
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
    };
}