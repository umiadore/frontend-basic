console.log('hello, DOM!')
console.log(document)
console.dir(document)

// находим элемент через поиск по тегам и кладем его в переменную; так как тегом может быть много - элементы приходят в массиве (списке элементов) - мы забираем первый по нулевому индексу

// 1. поиск по тегу
let heading = document.getElementsByTagName('h2')[0]
console.log(heading)

// мы можем перезаписать значение элемента через свойство innerText
heading.innerText = 'Lesson 09. DOM Intro ⛲️ '

// 2. поиск по классу
let ul = document.getElementsByClassName('method-list'[0])
//ul.style.listStyleType = 'none'
ul.className = 'method-list'
console.log(ul)

// 3. поиск по id
let desc = document.getElementById('desc')
desc.className = 'desc' // добавили элементу заранее прописанный класс
console.log(desc)
