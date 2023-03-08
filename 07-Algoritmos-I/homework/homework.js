'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let divisor = 2;
  let result = [];
  while (num > 1) {
    if (num % divisor === 0) {
      result.push(divisor);
      num = num/divisor;
    }else{
      divisor++;
    }
  }
  if (num === 1) result.unshift(1);  
  return result;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // for (let j = 0; j < array.length; j++) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > array[i+1]) {
  //       const save = array[i];
  //       array[i] = array[i+1];
  //       array[i+1] = save;
  //     }
  //   }
  // }
  // return array;
  let ordered = false;

  while (!ordered){
    ordered = true;
    for (let i = 0; i < array.length -1; i++) {
      if (array[i] > array[i+1]) {
        const save = array[i];
        array[i] = array[i+1];
        array[i+1] = save;
        ordered = false;
      }   
    }
  } 
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0; j < array.length; j++) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i-1]) {
        let save = array[i];
        array[i] = array[i-1];
        array[i-1] = save;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let saved = i; // empiezo a guardar la *posición* (no el valor)
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[saved]) {
        saved = j; // guardo la posición si es menor
      }   
    }
    let temp = array[i];
    array[i] = array[saved];
    array[saved] = temp;
  }
  return array;
}

console.log(selectionSort([5, 1, 4, 2]));
console.log(selectionSort([10, 10, 16, 12]));
console.log(selectionSort([10, -2, -7, 4]));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
