'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length<=1) {
    return array
  }

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) {
    return array
  }

  let middle = Math.round(array.length / 2);
  let half1 = array.slice(0, middle);
  let half2 = array.slice(middle);

  let half1Sorted = mergeSort(half1);
  let half2Sorted = mergeSort(half2);

  return merge(half1Sorted, half2Sorted);
}
 
function merge(half1, half2) {
  let mergedList = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < half1.length && rightIndex < half2.length) {
    if (half1[leftIndex] < half2[rightIndex]) {
      mergedList.push(half1[leftIndex]);
      leftIndex++;
    } else {
      mergedList.push(half2[rightIndex]);
      rightIndex++;
    }
  }
  mergedList = mergedList.concat(half1.slice(leftIndex));
  mergedList = mergedList.concat(half2.slice(rightIndex));
  return mergedList;
}

console.log(mergeSort([5, 1, 4, 2, 8]));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
