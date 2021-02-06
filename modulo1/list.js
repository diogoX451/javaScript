console.log("Mexendo com lista");
// Uma sistuação onde a muitas variaveis, define um Array, que começa do [0] até 999
// const cidades = [`Palmas`, `Salvador`, `São Paulo`, 'Goiânia'];
// outro padrao de Array
const cidades = new Array(
    `Palmas`, 
    `Salvador`, 
    `São Paulo`, 
    'Goiânia'
);
//adicionar um item num Array
cidades.push(`Foz do Iguaçu`);

console.log(cidades);

// Remover uma elemento da lista
// primeiro a posição do elemento, depois a quantidade que vai eleminar

cidades.splice(0,1);
console.log(cidades);
// Para mostrar unico elemento padrão cidades[ aqui dentro coloca as posições 0 até 999]
console.log(cidades[2]);