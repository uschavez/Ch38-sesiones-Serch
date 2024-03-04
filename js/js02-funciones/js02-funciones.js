console.log("Sesión JS 02 - tipos de funciones");

/*
 Un bloque de código se define por {}
 Las variables declaradas con let y const
 dentro del bloque de código, solo tiene alcance (scope)
 dentro del mismo.
*/

var myVarA = "A";
let myVarB = "B";
const myVarC = "C";

function myScopeFunction() {
    var myVarFunctionVar = "var type";
    let myVarFunctionLet = "let type";
    const myVarFunctionConst = "const type";

     /* let y const tiene alcance de bloque
      Bloque de código: Los bloques de código son utilizados 
      para agrupar múltiples instrucciones y definir el 
      alcance de ciertas estructuras de control,
     */ 
     { // inicio de bloque de código
        console.log( myVarFunctionVar ); // "var type"
        console.log( myVarFunctionLet ); // "let type"
        console.log( myVarFunctionConst ); // "const type"
        {
            var myVarFunctionVar = "Nico";
            let myVarFunctionLet = "Andrés";
            const myVarFunctionConst = "José";  
            console.log( myVarFunctionVar ); // "Nico"
            console.log( myVarFunctionLet ); // "Andrés"
            console.log( myVarFunctionConst ); // "José"
        }
     } // fin de bloque de código

     console.log( myVarFunctionVar ); // "Nico"
     console.log( myVarFunctionLet ); // "let type"
     console.log( myVarFunctionConst ); // "const type"

}
myScopeFunction();
// var, let y const tienen function scope.
// solo tiene alcance dentro de la función.
// console.log( myVarFunctionVar );
// console.log( myVarFunctionLet );
// console.log( myVarFunctionConst );

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( greeting() );

function greeting() {
    return "Hola Ch38";
}


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

// console.log(  sum(10, 20) ); // Cannot access 'sum' before initialization

const sum = function ( a , b){
    return a + b;
};

console.log(  sum(3, 15) ); // 18

// Pase por valor y pase por referencia =====================
// en los datos primitivos el pase es por valor
let age = 19;
let newAge = age; // 19
age = 40;
console.log( newAge ); // 19

// en los objetos el pase de datos es por referencia
let myArray = [1,2,3];
let numbers = myArray;
myArray.push(4); // agregamos un elemento al final del arreglo [1,2,3, 4]
console.log( numbers ); // [1,2,3,4];

// Clonar un array, para que sean objetos distintos.
// slice: crea una copia superficial del array original, desde el principio hasta el final.
let cloneNumbers = myArray.slice();
myArray.push(5);  // [1,2,3,4,5];
console.log( cloneNumbers ); // // [1,2,3,4];