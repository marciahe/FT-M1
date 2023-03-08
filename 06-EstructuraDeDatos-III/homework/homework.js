'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
};

BinarySearchTree.prototype.size = function (value){
   // if (!this.value) {return 0}
   let count = 1;
   if (this.left){
      count ++;
      this.left.size();
      }
   if (this.right) {
      count ++;
      this.right.size();
   } 
   return count;
};

BinarySearchTree.prototype.insert = function (value){
   if (value <= this.value) {
      if (!this.left) {
         this.left = new BinarySearchTree(value);
         return value;
      } else {
         this.left.insert(value);
      }
   } else {
      if (!this.right) {
         this.right = new BinarySearchTree(value);
         return value;
      } else {
         this.right.insert(value);
      }
   }
};

BinarySearchTree.prototype.contains = function (value){
   if (value === this.value){
      return true;
   }
   if (this.left && this.left.contains(value)){
      return true;
   }
   if (this.right && this.right.contains(value)){
      return true;
   }
   return false;
};
BinarySearchTree.prototype.depthFirstForEach = function (cb, param){
   switch (param) {
      case "post-order": // I D N
         this.left && this.left.depthFirstForEach(cb, param);
         this.right && this.right.depthFirstForEach(cb, param);
         cb(this.value);
         break;
      case "pre-order": // N I D
         cb(this.value);
         this.left && this.left.depthFirstForEach(cb, param);
         this.right && this.right.depthFirstForEach(cb, param);
         break;
      default: // I N D
         this.left && this.left.depthFirstForEach(cb, param);
         cb(this.value);
         this.right && this.right.depthFirstForEach(cb, param);
         break;
   }
};
// - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
BinarySearchTree.prototype.breadthFirstForEach = function (){
   

};

let tree = new BinarySearchTree(15);

// tree.insert(12);
// tree.insert(22);
// let testSize = tree.size();
// let testContains1 = tree.contains(15);
// let testContains2 = tree.contains(12);
// let testContains3 = tree.contains(22);
// console.log(tree);
// console.log(testContains1);
// console.log(testContains2);
// console.log(testContains3);
// console.log(tree.left.value)
// console.log(tree.right.value)







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
