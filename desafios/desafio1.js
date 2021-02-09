const matriz1 = [
    [1, 2 , 3],
    [3, 3, 4 ]
];

const matriz2 = [
    [ 7,  8  ],
    [ 9,  10 ],
    [ 11, 12 ]
  ]


// console.log(matriz1[0][0]);
// console.log(matriz2[0][0]);

mat(matriz1, matriz2);
function mat (x, y){
    
    const calculo1 =   x[0][0] * y[0][0];
    console.log(calculo1);
    const calculo2 = x[0][1] * y[1][0];
    console.log(calculo2);
    const calculo3 = x[0][2] * y[2][0];
    console.log(calculo3);

    const resultado = calculo1 + calculo2 + calculo3;
    console.log(resultado);
    
}

