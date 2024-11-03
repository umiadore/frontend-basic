// для каждого задания создайте отдельную функцию - используйте возвращенное значение // у вас должна быть как минимум одна стрелочная функция и одна function declaration функция

// Задание 1

const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];



// 1.2 Создайте новый массив с джедаями младше 40 лет

const youngJedis = starWarsHeroes.find(el => el.age < 40);
console.log(youngJedis)

// 1.3 Посчитайте возраст всех джедаев

const jedisAges = starWarsHeroes.filter(el1 => el1.isJedi).reduce((a,c) => a+c.age, 0);
console.log(jedisAges);

// let sum = 0;
// for (let i = 0; i < jedisAges.length; i++) {
//     sum += jedisAges[i];
// }
// console.log(sum);

// Повысьте возраст героев на 10 лет

const sumOfJedis = starWarsHeroes.map(hero => ({
    ...hero, // Сохраняем все свойства объекта
    age: hero.age + 10, // Увеличиваем возраст на 10
}));
console.log(sumOfJedis)

// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

for (let i = 0; i < starWarsHeroes.length; i++) {
    if (starWarsHeroes[i].name === "Anakin Skywalker") {
        starWarsHeroes[i] = { name: "Darth Vader", age: 50, isJedi: false };
    }
}
console.log(starWarsHeroes)