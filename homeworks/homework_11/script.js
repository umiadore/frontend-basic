// Задание 1 // Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

const person = ["Maria", "Alexey", "Elena", "Dmitriy"];
const age = [22, 31, 45, 53];

let personsInfo = [];

for (let i = 0; i < person.length; i++) {
  personsInfo.push(`${person[i]} ${age[i]} years old`);
}
console.log(personsInfo);

// Задание 2 // Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.

let personsInfoReversed = [];

for (let i = person.length - 1; i >= 0; i--) {
  personsInfoReversed.push(personsInfo[i]);
}
console.log(personsInfoReversed);

// Задание 3 // Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль

const countries = [];

let length = countries.push("Франция", "Германия", "Италия");

console.log(countries);

let lastCountry = countries.pop();
console.log(lastCountry);

countries.unshift(lastCountry);
console.log(countries);

// Задание 4 // Создайте объект car с ключами brand, model, year, и isElectric. Задайте им значения.
// Выведите на экран все ключи объекта
// Выведите на экран все значения объекта
// Добавьте в объект car метод getCarInfo, который будет возвращать строку, содержащую информацию о марке, модели и году выпуска машины.
// Вызовите этот метод и выведите результат на экран.
// выполните итерацию по ключам с помощью цикла for...in.
// Внутри цикла выводите на экран каждую пару ключ: значение.
// Затем модифицируйте вывод, чтобы он выглядел как: "Ключ: [ключ], Значение: [значение]". Например, "Ключ: brand, Значение: Toyota".

const car = {
  brand: "maserati",
  model: "xxx",
  year: 2018,
  isElectric: true,
};

const getCarInfo = `${car.brand} ${car.model} ${car.year}`;

console.log(getCarInfo);

