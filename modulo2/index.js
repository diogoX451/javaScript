//Manter uma estrutura de negocio definir uma class, onde a muitas repetições

class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente{
    agencia;
    saldo;

    //metodos usar () onde vai ter uma operação
     //para trabalhar com parametro da mesma class usa this
    saque(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return console.log(`Seu saldo é: ${this.saldo} Reais`);
        } else {
            console.log("Você não tem dinheiro");
        }
        
    };
    deposito(valor){
        if(valor > 0){
            this.saldo += valor; 
             return console.log(`Valor depositado foi de ${this.saldo} Reais`);
        } 
    };
}
//chamar a class 



//Primeiro Cliente
const cliente1 = new Cliente();
    cliente1.nome = "Diogo";
    cliente1.cpf = 30100100203;
const contaDiogo = new ContaCorrente();
    contaDiogo.agencia = 1003;
    contaDiogo.saldo = 100;
    contaDiogo.deposito(100);  
    contaDiogo.saque(50);
    console.log(contaDiogo);



//Segunodo Cliente
const cliente2 = new Cliente();
    cliente2.nome = "Guilherme";
    cliente2.cpf = 10150106203;
const contaGuilherme = new ContaCorrente();
    contaGuilherme.saldo = 0;
    contaGuilherme.agencia = 1004;
    

console.log(cliente1, cliente2);