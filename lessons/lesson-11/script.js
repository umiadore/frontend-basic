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

const animals = ["shark", "panda", "tuger", "otter"];
const snake = "snake";

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

const returnedValue3 = animals.unshift("dog");

console.log(animals);
console.log(returnedValue3);

//* shift - метод удаления элемента в начало массива, мутирующий метод
// 1. изменяет исходный массив, удаляет элемент в начале массива
// 2. возвращенное значение - длина измененного массива

const returnedValue4 = animals.shift("dog");
console.log(animals);
console.log(returnedValue4);

console.log("--------------");

//* spread syntax - спред оператор - удобный способ создать копию массива
// spread syntax только для одномерных массивов

const newAnimals = [...animals]; //три точки означают, что все элементы старого массива приходят в новый; когда мы ставим три точки, получается, что только элементры приходят в массив

const mixedArr1 = [animals, fruits]; // если передать массив без трех точек, то в консоли будет массив в массиве - двумерный массив
console.log(newAnimals);
console.log(mixedArr1);

//const mixedArr2 = [...animals, ...fruits]
//console.log(mixedArr2);

console.log("__________________");

// чтобы сделать глубокую копию можно воспользоваться методом structure clone
let mixedArrDeep = structuredClone(mixedArr1);

// если вы создаете копию со spread оператором - это поверхностная копия
let mixedArrShallow = [...mixedArr1];

// при изменении вложенных данных в поверхностной копии - данные меняются и в источнике
mixedArrShallow[0][1] = "🐻";

console.log(mixedArr1);
console.log(mixedArrDeep);
console.log(mixedArrShallow);

console.log("__________________");

// !Objects (ссылочный тип данных), данные хранятся в формате ключ - значение
// ключи - это строковые значения, у объекта фигурные скобки

const person1 = {
  name: "Ron",
  lastname: "Weasley",
  age: 40,
  isAdult: true,
  isMarried: false,
  siblings: ["Ginny", "Fred", "George"],
};

const person2 = {
  name: "Ginny",
  lastname: "Weasley",
  age: 35,
  isAdult: true,
  isMarried: true,
  siblings: ["Ron", "Fred", "George"],
};
// частный случай массива состоящего из объектов
const family = [person1, person2];

// к значениям объектов мы обращаемся по ключам через точку
const person2Info =
  person2.name +
  " " +
  person2.lastname +
  " is a sister of " +
  person1.name +
  " " +
  person1.lastname;

console.log(person2Info);

const personInfo = `${person1.name} ${person1.lastname} is a brother of ${person2.name} ${person2.lastname}`;

console.log(personInfo);

// пример работы с циклами с массивом из объектов, итерируемся по массиву и обращаемся по индексу к каждому объекту через итератор;
// у выбранного объекта по ключу забираем нужное значение
for (let i = 0; i < family.length; i++) {
  console.log(family[i].name, "is", family[i].age);
}
console.log("__________________");
// когда мы работаем с объектами мы называем ключи в одно слово через camel case
// для того чтобы упростить работу с ключами
// если ключ назван строкой с пробелом - обращаемся к ней через квадратные скобки

const variable = "hasWife"; // мы хотим добавить объект ключ-строку из этой переменной

const person3 = {
  name: "Bill",
  lastname: "Weasley",
  age: 35,
  isAdult: true,
  [variable]: true, // способ создания ключа из переменной со строкой
  "brothers and sisters": ["Ron", "Fred", "George", "Ginny"],
};
// если ключ назван строкой с пробелом - обращаемся к ней через квадратные скобки
console.log(person3["brothers and sisters"]); // обращение к ключу со строкой с пробелом
console.log(person3);

console.log("__________________");

// * Деструктуризация объектов
// 1. забираем данные из объекта по выбранным ключам
// 2. объявляем пременные с названиями совпадающими с именами этих ключей
// 3. присваиваем значения в эти новые переменные

// ? так выглядит запись c деструктуризацией
const {name, lastname, age, siblings} = person1 // this is an example of what was written above (1,2,3)

console.log(name);
console.log(siblings);
console.log(age);

// ? так выглядит запись без деструктуризации 🥵
// const name = person1.name
// const siblings = person1.siblings
// const age = person1.age

console.log("__________________");

// * Деструктуризация массивов

family.push(person3)
console.log(family)

// чтобы деструктуризировать массив, нужно соблюдать порядок, но за то можно менять названия переменных
const [ron, ginny, bill] = family;

console.log (ron.name);
console.log (ginny.name);
console.log (bill.name);

//! если нам нужен только пример с индексом 2, мы сохраняем порядок обращения к нему через запятые, пропуская ненужные элементы
// const [, , bill] = family;

// console.log (ron.name);
// console.log (ginny.name);
// console.log (bill.name);