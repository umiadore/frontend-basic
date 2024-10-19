// !Arrays - массивы (сложный тип данных)
// синтаксис масива включает фигурные скобки []

const arr = [];
const numbers = [4, 8, 15, 16, 23, 42];
const fruits = ["apple", "orange", "kiwi", "mango"];

// JS позволяет хранить разные значения в массиве, но так желательно не делать, так как то не считается удобным 😅
const arr1 = [1, "apple", undefined, true];
console.log(arr1);

// чтобы обратиться к элементу массива нужно использовать его индекс
let kiwi = fruits[2];
console.log(kiwi);

// !ЦИКЛЫ
// * for loop - цикл for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i], "под номером", i);
}

let fruitsLength = fruits.length;

//* while - цикл работает до достижения какого-либо условия
let i = 1;
while (i < 6) {
  console.log(i, "раз");
  i++; // без изменения i, мы никогда не выйдем из цикла
}

// *if / else - условный оператор

let isStudent = true;
if (isStudent) {
  console.log("seems like you are a student");
} else {
  console.log("you are not a student anymore 👩🏻‍💻");
}

//! Методы добавления и удаления элементов массива
// все методы массивов делятся на мутирующие и немутирующие 
// мутирующие - изменяют исходный массив
// немутирующие - не изменяют исходный массив, создают новый

const animals = ['shark', 'panda', 'tuger', 'otter'];
const snake = 'snake';

// *push() - метод добавления элемента в конец массива; метод - это ф-я, которая связана с каким-либо объектом

// мутирующий метод 
// animals.push(snake); // - 1) изменяет исходный массив 
const returnedValue1 = animals.push(snake); // - 2) его возвращененное значение - длина измененного массива
//console.log(animals);

// *pop() - метод, который удаляет элементы с конца (мутирующий)

console.log(animals);
const returnedValue2 = animals.pop();
console.log(animals);
console.log(returnedValue2); // возвращенное значение - удаленный элемент

//* unshift - метод добавляения элемента в начало массива, мутирующий метод
// 1. изменяет исходный массив, добавляет элемент в начало
// 2. возвращенное значение - длина измененного массива

const returnedValue3 = animals.unshift('dog')

console.log(animals);
console.log(returnedValue3);

//* shift - метод удаления элемента в начало массива, мутирующий метод
// 1. изменяет исходный массив, удаляет элемент в начале массива
// 2. возвращенное значение - длина измененного массива

const returnedValue4 = animals.shift('dog')
console.log(animals);
console.log(returnedValue4);

console.log('--------------')

//* spread syntax - спред оператор - удобный способ создать копию массива
// spread syntax только для одномерных массивов

const newAnimals = [...animals] //три точки означают, что все элементы старого массива приходят в новый; когда мы ставим три точки, получается, что только элементры приходят в массив

const mixedArr1 = [animals, fruits]; // если передать массив без трех точек, то в консоли будет массив в массиве - двумерный массив
console.log(newAnimals)
console.log(mixedArr1);

//const mixedArr2 = [...animals, ...fruits]
//console.log(mixedArr2);

console.log('__________________')

// чтобы сделать глубокую копию можно воспользоваться методом structure clone
let mixedArrDeep = structuredClone(mixedArr1);

// если вы создаете копию со spread оператором - это поверхностная копия
let mixedArrShallow = [...mixedArr1];

// при изменении вложенных данных в поверхностной копии - данные меняются и в источнике
mixedArrShallow[0] [1] = '🐻';

console.log (mixedArr1);
console.log (mixedArrDeep);
console.log(mixedArrShallow);
