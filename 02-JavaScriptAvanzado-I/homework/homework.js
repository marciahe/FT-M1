// # Homework JavaScript Avanzado I

// ## Scope & Hoisting

// Determiná qué será impreso en la consola, sin ejecutar el código.

// > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

// Ejercicio 1 ____________________________________________________________
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log('x = '+x); // 10 (línea 14)
   console.log('a = '+a); // 8 (asignado en la línea 23 cuando se manda llamar)
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8 (toma el valor de 'a' en la línea 18)
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 10 (toma el valor de 'c' en la línea 20) ?????
};
c(8, 9, 10); 
console.log(b); // 10 (llama a la variable global en línea 12)
console.log(x); // 1 (línea 10)
// RESULTADO ESPERADO:
// 10
// 8
// 8
// 10 --> xxxxxxxxxxxxxxxxxxxxxx (sale 8 🤔)
// 10
// 1

// Ejercicio 2 ____________________________________________________________
console.log(bar); // undefined
console.log(baz); // undefined
foo(); // Hola!
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
// RESULTADO ESPERADO:
// undefined
// undefined  --> xxxxxxxxxxxxxxxxxxxx (manda error "baz is not defined" ⛔️)
// Hola!    (ya no se ejecuta por el error 🙅‍♀️)

// Ejercicio 3 ____________________________________________________________

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
// RESULTADO ESPERADO:
// Franco

// Ejercicio 4 ____________________________________________________________
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
// RESULTADO ESPERADO:
// Tony
// Franco
// Tony

// Ejercicio 5 ____________________________________________________________
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
// RESULTADO ESPERADO:
// The Flash
// Reverse Flash
// The Flash (ya se ejecutó el if)
// Franco ---> xxxxxxxxxxxxxxxxx (undefined porque era 'let' 🤷‍♀️)


// ### Coerción de Datos
// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:
6 / "3";
"2" * "3";
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1;
[] == ![]
// RESULTADO ESPERADO:
// 2
// 6
// 9px
// '$45'
// 2
// undefined ---> xxxxxxxxxx (NaN)
// undefined ---> xxxxxxxxxx (Infinity)
// undefined ---> xxxxxxxxxx ([0])
// 09 -----> xxxxxx (9)
// 2
// 5
// 0 ------> xxxxxx (5)
// 5
// [3,3,10] -----> xxxxxx (23) 😂
// true -------> xxxxx (false)
// false -------> xxxxx (true)


// > Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

// ### Hoisting

// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}
test();
// RESULTADO ESPERADO:
// undefined (al llamar la función no se envió un argumento)
// 2 (manda a llamar la funcion)
// en el navegador aparece un 'undefined' extra jaja


// Y el de este código? :
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
// RESULTADO ESPERADO:
// undefined (el if no se recorre así que el return no sabe qué es 'snack'?????)


// ### This
// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
// RESULTADO ESPERADO:
// Aurelio de Rosa
// Aurelio de Rosa xxxxxxxxxxx (Coderun da 'undefined' y el navegador da Juan Perez + un undefined extra)

// ### Event loop
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}
printing();
// RESULTADO ESPERADO:
// 1
// 4
// 3
// 2
