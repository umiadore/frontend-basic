const brothers = [
    {
        name: "Frodo",
        height: 100,
        race: "hobbit",
        age: 30,
        hasMagic: false,
        image:
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/frodo-smiling-at-the-end-of-return-of-the-king.jpg"
      },
      {
        name: "Legolas",
        height: 190,
        race: "elf",
        age: 500,
        hasMagic: true,
        image:
          "https://image.vip.de/23232866/t/sE/v2/w1440/r1.5/-/ganz-schoen-wenig-orlando-bloom-verraet-die-hoehe-seiner-der-herr-der-ringe-gage-jpg--article-image-9147566-.jpg"
      },
      {
        name: "Aragorn",
        height: 180,
        race: "human",
        age: 50,
        hasMagic: false,
        image:
          "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/04/lord-of-the-rings-aragorn-mission-impossible-actor.jpg"
      },
      {
        name: "Gimli",
        height: 50,
        race: "dwarf",
        age: 200,
        hasMagic: false,
        image:
          "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/gimli-s-wearing-the-helmet-given-by-groin-his-father.jpg"
      },
      {
        name: "Gendalf",
        height: 200,
        race: "magician",
        age: 2000,
        hasMagic: true,
        image: "https://cdn-media-ie.pearltrees.com/d2/ab/13/d2ab13dfb949137aea3b21d370ca5e1f-xl.jpg"
      }
];

const gallery = document.getElementById("grid-gallery");

const btnMagic = document.getElementById("btn-magic");
const btnDelete = document.getElementById("btn-del");

const copyBrothers = [...brothers] // сделали копию исходных данных для операцию с удалением

function createCards (array) {
    array.map((brother) => {
    const card = document.createElement("div");
    card.className = "grid-card";
    // создаем заголовок
    const h4 = document.createElement("h4");
    h4.innerText = brother.name;
    // добавляем к карточке заголовок
    card.appendChild(h4);
    // создаем обертку для картинки
    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    // создаем картинку
    const img = document.createElement("img");
    img.src = brother.image;
    // добавляем картинку к обертке
    wrapper.appendChild(img);
    // добавляем обертку с картинкой к карточке
    card.appendChild(wrapper);
    // создаем параграф
    const p = document.createElement("p");
    p.innerText = `This is ${brother.race}. His height is ${brother.height}. He is ${
      brother.age
    } years old. ${
      brother.hasMagic ? "He uses magic 🪄" : "Unfortunately, no magic for this character..."
    }`;
  card.appendChild(p);
  // добавляем карточку к галерее
  gallery.appendChild(card);
});
}

createCards(brothers); // функция - вызов создания с исходным массивом

// функция для очистки галереи (элементов), пока у галереи есть первый потомок, он будет удалятся
function cleanGallery (){
    while (gallery.firstChild) {
gallery.removeChild(gallery.firstChild);
}}

btnMagic.addEventListener('click', () => {
  const magicBrothers =  brothers.filter((brother) => brother.hasMagic === true)
cleanGallery();
createCards(magicBrothers) // вызов создания с отфильтрованным массивом
});

btnDelete.addEventListener('click', () => {
    // удалили последний элемент
    copyBrothers.pop()
    // почистили галерею
    cleanGallery();
    // создали новую галерею с измененным кол-вом карточек
    createCards(copyBrothers)
});