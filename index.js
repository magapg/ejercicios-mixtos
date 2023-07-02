// 1- Ejercicio de push y pop:
// a- Crea un array vacío llamado "frutas".
let frutas = [];
// b- Utiliza el método push para agregar las siguientes frutas al array: "manzana", "banana" y "naranja".
frutas.push('manzana', 'banana', 'naranja');
// c- Utiliza el método pop para eliminar la última fruta del array.
frutas.pop(2);
// d- Imprime el array resultante.
console.log(frutas)

// 2- Ejercicio de join y split:
// a- Crea un array llamado "nombres" con los siguientes elementos: "Juan", "María", "Pedro".
let nombres = ['Juan', 'Maria', 'Pedro'];
// b- Utiliza el método join para unir todos los nombres en una cadena separada por comas.(c)
let nombreCompletos = (nombres.join(','));
console.log(nombreCompletos);
// d- Utiliza el método split para convertir la cadena "nombresCompletos" (e)
let arrayDeNombres = nombreCompletos.split(",");
// f- Imprime el Array resultante
    console.log(arrayDeNombres);

// 3- Ejercicio de slice y splice:
// a- Crea un array llamado "numeros" con los números del 1 al 5.
let numeros = [1, 2, 3, 4, 5];
// b- Utiliza el método slice para crear un nuevo array llamado "subArray" que contenga los elementos desde el índice 2 hasta el final.
let subArray = numeros.slice(2);
// c- Utiliza el método splice para eliminar los dos últimos elementos del array "numeros".
numeros.splice(-2);
// d- Imprime tanto el array "subArray" como el array "numeros" resultantes.
console.log(numeros); 
console.log(subArray);

// 4- Ejercicio de map:
// a- Crea un array llamado "numeros" con los números del 1 al 5.
let numbers = [1, 2, 3, 4, 5];
// b- Utiliza el método map para multiplicar cada número por 2
// console.log (numbers.map(numbers => numbers *2));
 // c- Guarda el resultado en un nuevo array llamado "dobles".
 let dobles = numbers.map(numbers => numbers *2);
 // d- Imprime el Array dobles
console.log(dobles);
 // 4- Ejercicio de filter:
// e- Crea un array llamado "edades" con los siguientes elementos: 18, 25, 12, 30, 15.
 let edades = [18, 25, 12, 30, 15];
 // f- Utiliza el método filter para obtener un nuevo array llamado "mayoresDeEdad" que contenga solo las edades mayores o iguales a 18.
let mayoresDeEdad = edades.filter( edad => edad >= 18);
// d- Imprime el array "mayoresDeEdad"
console.log(mayoresDeEdad);

// 1- Ejercicio de length:
// a- Crea un array llamado "colores" con los siguientes elementos: "rojo", "verde", "azul".
let colores = ["rojo","verde","azul"];
// b- Imprime la longitud del array utilizando la propiedad length.
 console.log(colores.length);
// Ejercicio de indexOf y lastIndexOf:
// a- Crea un array llamado "numeros" con los siguientes elementos: 1, 3, 5, 3, 7, 3.
let numero = [1, 3, 5, 3, 7, 3];
console.log(numero)
// b- Utiliza el método indexOf para encontrar la primera aparición del número 3 en el array.
let primerAparicion = numero.indexOf(3);
// c- Utiliza el método lastIndexOf para encontrar la última aparición del número 3 en el array.
let segundaAparicion = numero.lastIndexOf(3);
// d- Imprime ambos resultados
console.log(primerAparicion);
console.log(segundaAparicion);
// 3- Ejercicio de includes:
// a- Crea un array llamado "frutas" con los siguientes elementos: "manzana", "banana", "naranja".
let fruta = ["manzana", "banana", "naranja"];
// b- Utiliza el método includes para verificar si el array contiene la fruta "pera".
let contienePera = fruta.includes("pera");
// c- Imprime el resultado
if (contienePera){
    console.log("El array contiene 'pera'");
} else {
    console.log("El array no contiene 'pera'");
}
// 4- Ejercicio de reverse:
// a- Crea un array llamado "letras" con los siguientes elementos: "a", "b", "c", "d".
let letras = ["a", "b", "c", "d"]
// b- Utiliza el método reverse para invertir el orden de los elementos en el array.
letras.reverse()
// c- Imprime el array resultante.
console.log(letras);
// 5- Ejercicio de sort:
// a- Crea un array llamado "numeros" con los siguientes elementos: 5, 2, 9, 1, 7.
let numero1 = [5, 2, 9, 1, 7];
// b- Utiliza el método sort para ordenar los números de forma ascendente.
let ordenar = numero1.sort((a, b)=> a - b);
// c- Imprime el resultado
console.log(numero1);
// 6- Ejercicio de concat:
// a- Crea dos arrays: "nombres1" con los elementos "Juan", "María" y "nombres2" con los elementos "Pedro", "Laura".
let nombres1 = ["Juan", "Maria"];
let nombres2 = ["Pedro", "Laura"];
// b- Utiliza el método concat para unir los dos arrays en uno nuevo llamado "nombresCompletos".
nombresCompletos = nombres1.concat(nombres2);
// c- Imprime el array "nombresCompletos".
console.log(nombresCompletos);
// 7- Ejercicio de every:
// a- Crea un array llamado "edades" con los siguientes elementos: 22, 35, 28, 42.
let edades1 = [22, 35, 28, 42];
// b- Utiliza el método every para verificar si todas las edades son mayores de 18.
let todasMayoresDe18 = edades1.every((edades1) => edades1 > 18);
// c- Imprime el resultado.
if (todasMayoresDe18) {
    console.log("Todas las edades son mayores de 18.");
  } else {
    console.log("Al menos una edad es menor o igual a 18.");
  }
// 8- Ejercicio de some:
// a- Crea un array llamado "notas" con los siguientes elementos: 7, 5, 9, 3.
let notas = [7, 5, 9, 3];
// b- Utiliza el método some para verificar si alguna nota es mayor o igual a 8
let algunaMayorIgualA8 = notas.some((nota) => nota >= 8);
// c- Imprime el resultado.
if (algunaMayorIgualA8) {
    console.log("Una nota es mayor o igual a 8.");
  } else {
    console.log("Ninguna nota es mayor o igual a 8.");
  }
  // 9- Ejercicio de reduce:
// a- Crea un array llamado "numeros" con los siguientes elementos: 1, 2, 3, 4, 5.
let numeros2 = [1, 2, 3, 4, 5];
// b- Utiliza el método reduce para obtener la suma de todos los números en el array.
let suma = numeros2.reduce((acumulador, numeros2) => acumulador + numeros2, 0);
// c- Imprime el resultado
console.log(suma);
// Ejercicios aplicados en funciones:
// 1- Problema de suma de elementos:
// a- Crea una función llamada sumarElementos que reciba un array de números como parámetro.
function sumarElementos(numeros3) {
    return numeros3.reduce((acumulador, elemento) => acumulador + elemento, 0);
  }
 // b- La función debe sumar todos los elementos del array y devolver el resultado.
  let numeros3 = [100, 200, 300, 400, 500];
  let  suma3 = sumarElementos(numeros3);
// c- prueba la función con diferentes arrays y verifica que la suma sea correcta.
  console.log("La suma de numeros3 es:", suma3);  
// 2- Problema de promedio de calificaciones:
// a- Crea una función llamada calcularPromedio que reciba un array de calificaciones (números) como parámetro.
function calcularPromedio(calificaciones) {
    if (calificaciones.length === 0) {
      return 0;
    }
  
    let suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    let promedio = suma / calificaciones.length;
    return promedio;
  }
// La función debe calcular y devolver el promedio de las calificaciones.
// Prueba la función con diferentes arrays de calificaciones y verifica que el promedio sea correcto.
let calificaciones1 = [7, 8, 9, 6, 8];
let promedio1 = calcularPromedio(calificaciones1);
console.log("El promedio de calificaciones1 es:", promedio1);
let calificaciones2 = [10, 9, 9.5, 8.5, 7.5];
let promedio2 = calcularPromedio(calificaciones2);
console.log("El promedio de calificaciones2 es:", promedio2);
// 3- Problema de búsqueda de palabra:
// a- Crea una función llamada buscarPalabra que reciba un array de palabras y una palabra como parámetros.
// La función debe buscar la palabra en el array y devolver true si la encuentra, o false si no la encuentra.
function buscarPalabra(array, palabra) {
    return array.includes(palabra);
  }
let palabras1 = ["casa", "coche", "perro", "gato"];
let palabra1 = "perro";
console.log("¿La palabra se encuentra en el array? -", buscarPalabra(palabras1, palabra1));

let palabras2 = ["manzana", "banana", "naranja", "uva"];
let palabra2 = "kiwi";
console.log("¿La palabra se encuentra en el array? -", buscarPalabra(palabras2, palabra2));
// 4- Problema de eliminación de duplicados:
// a- Crea una función llamada eliminarDuplicados que reciba un array de elementos como parámetro.
function eliminarDuplicados(array) {
    return [...new Set(array)];
  }
 // b- La función debe eliminar los elementos duplicados del array y devolver un nuevo array sin duplicados. 
 // c- Prueba la función con diferentes arrays y verifica que los duplicados sean eliminados correctamente.
 const array1 = [1, 2, 2, 3, 4, 4, 5];
const resultado1 = eliminarDuplicados(array1);
console.log("Array sin duplicados:", resultado1);

const array2 = ["a", "b", "c", "a", "d", "e", "d"];
const resultado2 = eliminarDuplicados(array2);
console.log("Array sin duplicados:", resultado2);
 

  

















   


    



