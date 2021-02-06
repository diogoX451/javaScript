/* 
Observações pular linha \n

While, sistema de loop
*/

console.log("\n Trabalhando com Loop");

const idade = 18;
let acompanhado = new Boolean(false);
const temPassagem = false;
const destino = "Palmas";

const city = new Array(
    `Palmas`, 
    `Manaus`, 
    `Maranhão`, 
    `Goiânia`
);
let contador = 0;
let existe = new Boolean (false);
while (contador < 4) {
    
    if((city[contador]) == destino){
        console.log(`Destino Existente`);
        existe = true; 
        break;
    } else {
        console.log("Não temos mais passagens");
        existe;
        break;
    }
    contador++;
}
// outra forma 
// for (let contador = 0;contador <3;  i++){}

// for(let i; i < 4; i++){
//     if((city[i]) == destino){
//         console.log(`Destino Existente`);
//         existe = true; 
//         break;
//     } else {
//         console.log("Não temos mais passagens");
//         existe;
//         break;
//     }
// }

function compra() {
  if (idade >= 18 || acompanhado == true) {
    city.splice(1, 1);
  } else if (idade < 18 || acompanhado == false) {
    console.log(`\n Não Posso vender, necessario um acompanhamento`);
  }
}
