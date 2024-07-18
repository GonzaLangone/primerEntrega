
// //! Calculadora
// function sumar(numA, numB){
//     return numA + numB;
// };

// function restar(numA, numB){
//     return numA - numB;
// };

// function multiplicar(numA, numB){
//     return numA * numB;
// };

// function dividir(numA, numB){
//     return numA / numB;
// };

// let numero;

// let numero = prompt('Ingrese el primer numero (ingrese -1 para salir): ');
// while (numero != '-1'){
//     numero = prompt('Ingrese el primer numero (ingrese -1 para salir): ');
//     alert(numero.toUpperCase());
// }



// alert('Ingrese precio y el pocentaje a calcular!')

function calcularVeinte(precio){ 
    let total = precio * 20 / 100;
    return total;
}
function calcular(precio, porcentaje){ 
    let total = precio * porcentaje / 100;
    return total;
}

function menu(){
    let opciones = ` 1- Calcular 20% \n 2- Ingresar precio y porcentaje \n 0- Salir \n`;
    // alert(opciones);
    let opcSeleccionada = parseInt(prompt(`${opciones} \n SELECCIONE UNA OPCION: `))
    switch(opcSeleccionada){
        case 0: 
        alert('Adios vuelva pronto :D');
        return 0;

        case 1:
        precio = prompt('Ingrese el precio: ');
        return total = calcularVeinte(precio);
        ;

        case 2: 
        precio = prompt('Ingrese el precio: ');
        porcentaje = prompt('Ingrese el porcentaje %:');
        return total = calcular(precio, porcentaje);
        ;default: return 'Usted no selecciono una opcion';
        
    }

}

let total;
let precio ;
let porcentaje;
let sistema;

while (sistema != 0){
   sistema = menu();
   if (sistema === 0){
    break
   }
   alert(sistema);
}














// .................. CLASE DE PRACTICA

function adivinarNumero(){
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // con esto genera aleatoriamente el numero
    

}