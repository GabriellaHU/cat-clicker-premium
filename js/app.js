// ----------------------------------------------
// ----------- Cat Picture Randomizer -----------
// ----------------------------------------------

//array of cat pictures
const cats = [
  {
    src: 'images/5372754294_db6acaa1e5_z.jpg',
    name: 'Grumpy'
  },
  {
    src: 'images/5655186625_2eedca4fc6_z.jpg',
    name: 'Tiger'
  },
  {
    src: 'images/5675069067_c427114ce0_z.jpg',
    name:'Shylo'
  },
  {
    src: 'images/8086455101_227ba7054d_z.jpg',
    name: 'Bob'
  },
  {
    src: 'images/12367551225_3c15302538_z.jpg',
    name: 'Cutie'
  }
];

//select an image from the cats array
const catLength = (cats.length)-1;

//figure element that holds the cat picture
const catContainer = document.querySelector('.img_container');

let catImg = document.createElement('img');
let catName = document.createElement('figcaption');

const catContainer2 = document.querySelector('.img_container2');

let catImg2 = document.createElement('img');
let catName2 = document.createElement('figcaption');

catImg.setAttribute('alt', 'cat');
catImg.setAttribute('class', 'cat-pic');

catImg2.setAttribute('alt', 'cat');
catImg2.setAttribute('class', 'cat-pic2');

//init and refresh cat pic on click
const refreshCat = function(){

  let randomNum = getRandomIntInclusive(0, catLength);
  let randomCat = cats[randomNum].src;
  let randomName = cats[randomNum].name;

  catImg.setAttribute('src', randomCat);
  catContainer.appendChild(catImg);
  catName.textContent = randomName
  catContainer.appendChild(catName);
};

const refreshCat2 = function(){

  let randomNum = getRandomIntInclusive(0, catLength);
  let randomCat = cats[randomNum].src;
  let randomName = cats[randomNum].name;

  catImg2.setAttribute('src', randomCat);
  catContainer2.appendChild(catImg2);
  catName2.textContent = randomName;
  catContainer2.appendChild(catName2);
};

refreshCat();
refreshCat2();

//funtion that generates a random value
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ----------------------------------------------
// ----------------- CAT CLICK ------------------
// ----------------------------------------------

const catPic = document.querySelector('.cat-pic');
const counter = document.querySelector('.counter');

const catPic2 = document.querySelector('.cat-pic2');
const counter2 = document.querySelector('.counter2');

let count = 0
let count2 = 0

catContainer.addEventListener('click', function(){
  // refresh picture
  refreshCat();
  // count score based on clicking
  const increaseCount = function(){
    count++;
    counter.textContent = `Cat clicks: ${count}`;
  }();
}, false);

catContainer2.addEventListener('click', function(){
  // refresh picture
  refreshCat2();
  // count score based on clicking
  const increaseCount = function(){
    count2++;
    counter2.textContent = `Cat clicks: ${count2}`;
  }();
}, false);
