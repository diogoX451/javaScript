

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
//new
import { ContaPoupanca } from "./modulo3/ContaPoupanca.js";

//chamar a class 



//Primeiro Cliente
// construtor facilita a limpeza do codigo
const cliente1 = new Cliente("Diogo", 30100100203);
const contaDiogo = new ContaCorrente(1003, cliente1);
    // contaDiogo.#saldo = 100;
    contaDiogo.deposito(200);  
    contaDiogo.saque(50);
    // console.log(contaDiogo);
    const sacado = contaDiogo.saque(50);
    console.log(sacado);



//Segunodo Cliente
const cliente2 = new Cliente("Guilherme", 10150106203);
const contaGuilherme = new ContaCorrente(1004, cliente2);
    
 contaDiogo.transferir(100,contaGuilherme);
 console.log(ContaCorrente.numberConta);

// new module

const contaPoupanca = new ContaPoupanca(50, cliente1, 1003);
console.log(contaPoupanca);



